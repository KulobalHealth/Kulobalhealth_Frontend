import { useMutation } from "@tanstack/react-query";
import { loginAdmin, registerAdmin } from "@/lib/api/admin-auth";
import { useAdminAuth } from "@/store/admin-auth";

/**
 * React Query mutation for admin login.
 */
export function useAdminLogin() {
  const setToken = useAdminAuth((s) => s.setToken);
  const setUser = useAdminAuth((s) => s.setUser);
  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      if (data?.data?.token) {
        setToken(data.data.token);
      }
      if (data?.data) {
        setUser({
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          staffId: data.data.staffId,
          role: data.data.role,
          avatar: data.data.avatar ?? undefined,
        });
      }
    },
  });
}

/**
 * React Query mutation for admin registration.
 */
export function useAdminRegister() {
  return useMutation({
    mutationFn: registerAdmin,
  });
}
