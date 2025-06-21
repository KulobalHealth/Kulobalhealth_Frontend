"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import TextInput from "@/components/ui/text-input"
import Loader from "@/components/loader"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

// Complete schema for all form fields
const formSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  ownerName: z.string().min(1, "Owner/Manager name is required"),
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Telephone number is required"),
  role: z.enum(["pharmacy", "otc", "supplier"], {
    required_error: "Please select a role",
  }),
})

type FormData = z.infer<typeof formSchema>

interface BusinessRegistrationFormProps {
  formData: {
    businessName: string
    ownerName: string
    location: string
    email: string
    telephone: string
    role: string
  }
  setFormData: React.Dispatch<
    React.SetStateAction<{
      businessName: string
      ownerName: string
      location: string
      email: string
      telephone: string
      role: string
    }>
  >
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isloading: boolean
}

export default function BusinessRegistrationForm({
  formData,
  setFormData,
  handleSubmit,
  isloading,
}: BusinessRegistrationFormProps) {
  const [currentStep, setCurrentStep] = useState(1)

  const {
    control,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: formData?.businessName || "",
      ownerName: formData?.ownerName || "",
      location: formData?.location || "",
      email: formData?.email || "",
      telephone: formData?.telephone || "",
      role: (formData?.role as "pharmacy" | "otc" | "supplier") || undefined,
    },
    mode: "onChange",
  })

  // Sync form values with parent state whenever form values change
  const syncFormData = () => {
    const currentValues = getValues()
    setFormData({
      businessName: currentValues.businessName || "",
      ownerName: currentValues.ownerName || "",
      location: currentValues.location || "",
      email: currentValues.email || "",
      telephone: currentValues.telephone || "",
      role: currentValues.role || "",
    })
  }

  const handleNext = async () => {
    syncFormData()
    const isValid = await trigger(["businessName", "ownerName", "location"])
    if (isValid) {
      setCurrentStep(2)
    }
  }

  const handleBack = () => {
    syncFormData()
    setCurrentStep(1)
  }

  const onSubmit = (data: FormData) => {
    // Update parent state with final form data
    setFormData({
      businessName: data.businessName,
      ownerName: data.ownerName,
      location: data.location,
      email: data.email,
      telephone: data.telephone,
      role: data.role,
    })

    // Create a synthetic form event for compatibility
    const syntheticEvent = {
      preventDefault: () => {},
      currentTarget: {} as HTMLFormElement,
      target: {} as HTMLFormElement,
      bubbles: false,
      cancelable: false,
      defaultPrevented: false,
      eventPhase: 0,
      isTrusted: false,
      nativeEvent: {} as Event,
      timeStamp: Date.now(),
      type: "submit",
      persist: () => {},
      isDefaultPrevented: () => false,
      isPropagationStopped: () => false,
      stopPropagation: () => {},
    } as React.FormEvent<HTMLFormElement>

    handleSubmit(syntheticEvent)
  }

  if (currentStep === 1) {
    return (
      <>
        <div className="w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm">
          Business Info <span className="float-right">1/2</span>
        </div>

        <div className="w-full max-w-sm mt-6 space-y-4">
          <div className="space-y-1">
            <Controller
              name="businessName"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="Enter business name"
                  label="Business Name"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value)
                    syncFormData()
                  }}
                />
              )}
            />
            {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>}
          </div>

          <div className="space-y-1">
            <Controller
              name="ownerName"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="Enter owner/manager name"
                  label="Business Owner Name / Manager"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value)
                    syncFormData()
                  }}
                />
              )}
            />
            {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName.message}</p>}
          </div>

          <div className="space-y-1">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <TextInput
                  placeholder="Enter location"
                  label="Location"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value)
                    syncFormData()
                  }}
                />
              )}
            />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
          </div>

          <Button className="w-full" variant="default" type="button" onClick={handleNext}>
            Continue
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full max-w-sm text-emerald-600 font-bold mt-4 text-sm">
        Contact & Role <span className="float-right">2/2</span>
      </div>

      <form onSubmit={hookFormSubmit(onSubmit)} className="w-full max-w-sm mt-6 space-y-4">
        <div className="space-y-1">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter business email"
                label="Business Email Address"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value)
                  syncFormData()
                }}
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <Controller
            name="telephone"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter telephone number"
                label="Telephone Number"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value)
                  syncFormData()
                }}
              />
            )}
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Role</label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <div className="space-y-4">
                <div className="flex py-3 gap-4">
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input
                      type="radio"
                      value="pharmacy"
                      checked={field.value === "pharmacy"}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                        syncFormData()
                      }}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>Pharmacy</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input
                      type="radio"
                      value="otc"
                      checked={field.value === "otc"}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                        syncFormData()
                      }}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>OTC</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input
                      type="radio"
                      value="supplier"
                      checked={field.value === "supplier"}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                        syncFormData()
                      }}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>Supplier</span>
                  </label>
                </div>
              </div>
            )}
          />
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
        </div>

        <div className="flex gap-3">
          <Button type="button" variant="outline" className="flex-1" onClick={handleBack}>
            Back
          </Button>
          <Button className="flex-1" variant="default" type="submit" disabled={isloading}>
            {isloading ? <Loader /> : "Register Business"}
          </Button>
        </div>
      </form>
    </>
  )
}
