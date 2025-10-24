"use client";

import {
  AlertCircle,
  Image as ImageIcon,
  RefreshCw,
  Upload,
  X,
} from "lucide-react";
import { useCallback, useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useDeleteImage, useUploadImage } from "@/hooks/use-image-upload";

export interface UploadedImage {
  url: string;
  public_id: string;
  file?: File;
  isUploading?: boolean;
  uploadProgress?: number;
  error?: string;
}

interface ImageUploadProps {
  onImagesChange: (images: UploadedImage[]) => void;
  images: UploadedImage[];
  maxImages?: number;
  className?: string;
}

export function ImageUpload({
  onImagesChange,
  images,
  maxImages = 5,
  className = "",
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadImageMutation = useUploadImage();
  const deleteImageMutation = useDeleteImage();

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files) {
        return;
      }

      const selectedFiles = Array.from(files);
      const remainingSlots = maxImages - images.length;

      if (selectedFiles.length > remainingSlots) {
        toast.error(`You can only upload ${remainingSlots} more image(s)`);
        return;
      }

      // Add files to state immediately with uploading status
      const newImages: UploadedImage[] = selectedFiles.map((file) => ({
        url: URL.createObjectURL(file), // Temporary preview URL
        public_id: "", // Will be set after upload
        file,
        isUploading: true,
        uploadProgress: 0,
      }));

      const updatedImages = [...images, ...newImages];
      onImagesChange(updatedImages);

      selectedFiles.forEach((file, index) => {
        const imageIndex = images.length + index;

        uploadImageMutation.mutate(
          {
            file,
            onProgress: (progress) => {
              const currentImages = [...updatedImages];
              if (currentImages[imageIndex]) {
                currentImages[imageIndex] = {
                  ...currentImages[imageIndex],
                  uploadProgress: progress,
                };
                onImagesChange(currentImages);
              }
            },
          },
          {
            onSuccess: (data) => {
              const currentImages = [...updatedImages];
              if (currentImages[imageIndex]) {
                if (currentImages[imageIndex].url.startsWith("blob:")) {
                  URL.revokeObjectURL(currentImages[imageIndex].url);
                }

                currentImages[imageIndex] = {
                  url: data.url,
                  public_id: data.public_id,
                  isUploading: false,
                  uploadProgress: 100,
                };
                onImagesChange(currentImages);
                toast.success("Image uploaded successfully");
              }
            },
            onError: (error) => {
              const currentImages = [...updatedImages];
              if (currentImages[imageIndex]) {
                currentImages[imageIndex] = {
                  ...currentImages[imageIndex],
                  isUploading: false,
                  error: error.message,
                };
                onImagesChange(currentImages);
                toast.error(`Upload failed: ${error.message}`);
              }
            },
          }
        );
      });
    },
    [images, maxImages, onImagesChange, uploadImageMutation]
  );

  const handleRetryUpload = useCallback(
    (index: number) => {
      const image = images[index];
      if (!image.file) return;

      // Reset error and set uploading state
      const updatedImages = [...images];
      updatedImages[index] = {
        ...image,
        isUploading: true,
        uploadProgress: 0,
        error: undefined,
      };
      onImagesChange(updatedImages);

      uploadImageMutation.mutate(
        {
          file: image.file,
          onProgress: (progress) => {
            const currentImages = [...updatedImages];
            currentImages[index] = {
              ...currentImages[index],
              uploadProgress: progress,
            };
            onImagesChange(currentImages);
          },
        },
        {
          onSuccess: (data) => {
            const currentImages = [...updatedImages];

            if (currentImages[index].url.startsWith("blob:")) {
              URL.revokeObjectURL(currentImages[index].url);
            }

            currentImages[index] = {
              url: data.url,
              public_id: data.public_id,
              isUploading: false,
              uploadProgress: 100,
            };
            onImagesChange(currentImages);
            toast.success("Image uploaded successfully");
          },
          onError: (error) => {
            const currentImages = [...updatedImages];
            currentImages[index] = {
              ...currentImages[index],
              isUploading: false,
              error: error.message,
            };
            onImagesChange(currentImages);
            toast.error(`Upload failed: ${error.message}`);
          },
        }
      );
    },
    [images, onImagesChange, uploadImageMutation]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      const image = images[index];
      const updatedImages = images.filter((_, i) => i !== index);

      if (image.url.startsWith("blob:")) {
        URL.revokeObjectURL(image.url);
      }

      onImagesChange(updatedImages);

      if (image.public_id && !image.isUploading && !image.error) {
        deleteImageMutation.mutate(
          { public_id: image.public_id },
          {
            onSuccess: () => {
              toast.success("Image removed");
            },
            onError: (error) => {
              toast.error(`Failed to remove image: ${error.message}`);
            },
          }
        );
      }
    },
    [images, onImagesChange, deleteImageMutation]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );

  const canAddMore = images.length < maxImages;
  const hasImages = images.length > 0;

  return (
    <div className={`space-y-4 ${className}`}>
      {canAddMore && (
        <div
          className="cursor-pointer rounded-lg border-2 border-gray-300 border-dashed p-6 text-center transition-colors hover:border-gray-400"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-gray-600 text-sm">
            Click to upload or drag and drop images
          </p>
          <p className="text-gray-500 text-xs">
            {images.length} of {maxImages} images uploaded
          </p>
        </div>
      )}

      <input
        accept="image/*"
        className="hidden"
        multiple
        onChange={(e) => handleFileSelect(e.target.files)}
        ref={fileInputRef}
        type="file"
      />

      {hasImages && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div className="group relative" key={index}>
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt={`Product image ${index + 1}`}
                  className="h-full w-full object-cover"
                  src={image.url}
                />

                {image.isUploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center text-white">
                      <RefreshCw className="mx-auto mb-2 h-6 w-6 animate-spin" />
                      <Progress
                        className="h-2 w-16"
                        value={image.uploadProgress || 0}
                      />
                      <p className="mt-1 text-xs">
                        {image.uploadProgress || 0}%
                      </p>
                    </div>
                  </div>
                )}

                {image.error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-red-500/20">
                    <div className="text-center">
                      <AlertCircle className="mx-auto mb-2 h-6 w-6 text-red-500" />
                      <Button
                        className="text-xs"
                        onClick={() => handleRetryUpload(index)}
                        size="sm"
                        variant="secondary"
                      >
                        Retry
                      </Button>
                    </div>
                  </div>
                )}

                <Button
                  className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={() => handleRemoveImage(index)}
                  size="sm"
                  variant="destructive"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!(hasImages || canAddMore) && (
        <div className="py-8 text-center text-gray-500">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-2">No images uploaded</p>
        </div>
      )}
    </div>
  );
}
