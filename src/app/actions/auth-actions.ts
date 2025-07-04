"use server"

import { getUserByEmail, getUserByBusinessName, addUser, updateUser, initDatabase } from "@/lib/mock-auth/json-db"
import { cookies } from "next/headers"

import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcryptjs"
import { User } from "@/lib/mock-auth/auth"
import fs from "fs/promises"
import path from "path"
// Initialize the database when the server starts
initDatabase()

// Store passwords separately (in a real app, these would be hashed and stored in the user record)
interface UserAuth {
  email: string
  passwordHash: string
}

const PASSWORDS_FILE = "db/passwords.json"


// Helper functions for password management
async function getPasswords(): Promise<UserAuth[]> {
  try {
    const data = await fs.readFile(path.join(process.cwd(), PASSWORDS_FILE), "utf8")
    return JSON.parse(data)
  } catch {
    // If file doesn't exist, create it
    await fs.writeFile(path.join(process.cwd(), PASSWORDS_FILE), JSON.stringify([], null, 2))
    return []
  }
}

async function savePassword(email: string, password: string) {
  const passwords = await getPasswords()
  const passwordHash = await bcrypt.hash(password, 10)

  const existingIndex = passwords.findIndex((p) => p.email === email)
  if (existingIndex !== -1) {
    passwords[existingIndex].passwordHash = passwordHash
  } else {
    passwords.push({ email, passwordHash })
  }

  await fs.writeFile(path.join(process.cwd(), PASSWORDS_FILE), JSON.stringify(passwords, null, 2))
}

async function verifyPassword(email: string, password: string): Promise<boolean> {
  const passwords = await getPasswords()
  const userAuth = passwords.find((p) => p.email === email)

  if (!userAuth) return false

  return bcrypt.compare(password, userAuth.passwordHash)
}

// Login action
export async function loginUser(email: string, password: string) {
  try {
    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = await getUserByEmail(email)

    if (!user) {
      return { success: false, error: "User not found" }
    }

    const isPasswordValid = await verifyPassword(email, password)

    if (!isPasswordValid) {
      return { success: false, error: "Invalid password" }
    }

    // Set a cookie (e.g., userId or a session token)
    (await cookies()).set("userId", user.id, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      // secure: true, // Uncomment in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })

    return { success: true, user }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "Login failed. Please try again." }
  }
}

// Register action
export async function registerUser(userData: {
  businessName: string
  ownerName: string
  location: string
  email: string
  telephone: string
  password: string
  role: "pharmacy" | "supplier" | "otc"
}) {
  try {
    // Add a small delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if user already exists
    const existingUser = await getUserByEmail(userData.email)
    if (existingUser) {
      return { success: false, error: "User already exists with this email" }
    }

    // Check if business name already exists
    const existingBusiness = await getUserByBusinessName(userData.businessName)
    if (existingBusiness) {
      return { success: false, error: "A business with this name already exists" }
    }

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      businessName: userData.businessName,
      ownerName: userData.ownerName,
      location: userData.location,
      email: userData.email,
      telephone: userData.telephone,
      avatar: "/placeholder.svg?height=40&width=40",
      role: userData.role,
      createdAt: new Date().toISOString(),
    }

    // Save the user to the database
    await addUser(newUser)

    // Save the password separately
    await savePassword(userData.email, userData.password)

    return { success: true, user: newUser }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, error: "Registration failed. Please try again." }
  }
}

// Update profile action
export async function updateUserProfile(userId: string, userData: Partial<User>) {
  try {
    const updatedUser = await updateUser(userId, userData)

    if (!updatedUser) {
      return { success: false, error: "User not found" }
    }

    return { success: true, user: updatedUser }
  } catch (error) {
    console.error("Update profile error:", error)
    return { success: false, error: "Failed to update profile. Please try again." }
  }
}

// Logout action
export async function logoutUser() {
  // Remove the userId cookie by setting it to expire in the past
  (await cookies()).set("userId", "", {
    httpOnly: true,
    expires: new Date(0),
  })
  return { success: true }
}
