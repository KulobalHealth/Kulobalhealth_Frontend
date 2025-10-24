import { useMutation } from "@tanstack/react-query";
import { useAdminAuth } from "@/store/admin-auth";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ImageUploadResponse {
  url: string;
  public_id: string;
  // Add other fields as you discover them
}

interface UploadImageParams {
  file: File;
  onProgress?: (progress: number) => void;
}

interface DeleteImageParams {
  public_id: string;
}

export const useUploadImage = () => {
  const { token } = useAdminAuth();

  return useMutation({
    mutationFn: async ({
      file,
      onProgress,
    }: UploadImageParams): Promise<ImageUploadResponse> => {
      const formData = new FormData();
      formData.append("image", file); // Adjust field name if needed

      const response = await fetch(`${baseUrl}/admin/image-upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type for FormData - browser will set it with boundary
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authentication failed. Please login again.");
        }
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();

      // Adjust based on actual API response structure
      return {
        url: data.url || data.data?.url || data.imageUrl,
        public_id: data.public_id || data.data?.public_id,
        ...data,
      };
    },
  });
};

export const useDeleteImage = () => {
  const { token } = useAdminAuth();

  return useMutation({
    mutationFn: async ({ public_id }: DeleteImageParams) => {
      const response = await fetch(`${baseUrl}/admin/image-upload`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ public_id }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authentication failed. Please login again.");
        }
        throw new Error(`Delete failed: ${response.statusText}`);
      }

      return response.json();
    },
  });
};
