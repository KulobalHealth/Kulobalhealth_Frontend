import adminApi from "./admin-axios";

/**
 * Registers a new admin user.
 * @param data Registration data
 */
export async function registerAdmin(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const res = await adminApi.post("/admin/auth/register", data);
  return res.data;
}

/**
 * Logs in an admin user.
 * @param data Login data
 */
export async function loginAdmin(data: { email: string; password: string }) {
  const res = await adminApi.post("/admin/auth/login", data);
  return res.data;
}
