"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";

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
});

type FormData = z.infer<typeof formSchema>;

interface BusinessRegistrationFormProps {
  formData: {
    businessName: string;
    ownerName: string;
    location: string;
    email: string;
    telephone: string;
    role: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      businessName: string;
      ownerName: string;
      location: string;
      email: string;
      telephone: string;
      role: string;
    }>
  >;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isloading: boolean;
}

export default function BusinessRegistrationForm({
  formData,
  setFormData,
  handleSubmit,
  isloading,
}: BusinessRegistrationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

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
  });

  // Sync form values with parent state whenever form values change
  const syncFormData = () => {
    const currentValues = getValues();
    setFormData({
      businessName: currentValues.businessName || "",
      ownerName: currentValues.ownerName || "",
      location: currentValues.location || "",
      email: currentValues.email || "",
      telephone: currentValues.telephone || "",
      role: currentValues.role || "",
    });
  };

  const handleNext = async () => {
    syncFormData();
    const isValid = await trigger(["businessName", "ownerName", "location"]);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    syncFormData();
    setCurrentStep(1);
  };

  const onSubmit = (data: FormData) => {
    // Update parent state with final form data
    setFormData({
      businessName: data.businessName,
      ownerName: data.ownerName,
      location: data.location,
      email: data.email,
      telephone: data.telephone,
      role: data.role,
    });

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
    } as React.FormEvent<HTMLFormElement>;

    handleSubmit(syntheticEvent);
  };

  if (currentStep === 1) {
    return (
      <>
        <div className="mt-4 w-full max-w-sm font-bold text-emerald-600 text-sm">
          Business Info <span className="float-right">1/2</span>
        </div>

        <div className="mt-6 w-full max-w-sm space-y-4">
          <div className="space-y-1">
            <Controller
              control={control}
              name="businessName"
              render={({ field }) => (
                <TextInput
                  label="Business Name"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    syncFormData();
                  }}
                  placeholder="Enter business name"
                  value={field.value}
                />
              )}
            />
            {errors.businessName && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.businessName.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Controller
              control={control}
              name="ownerName"
              render={({ field }) => (
                <TextInput
                  label="Business Owner Name / Manager"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    syncFormData();
                  }}
                  placeholder="Enter owner/manager name"
                  value={field.value}
                />
              )}
            />
            {errors.ownerName && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.ownerName.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Controller
              control={control}
              name="location"
              render={({ field }) => (
                <TextInput
                  label="Location"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    syncFormData();
                  }}
                  placeholder="Enter location"
                  value={field.value}
                />
              )}
            />
            {errors.location && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.location.message}
              </p>
            )}
          </div>

          <Button
            className="w-full"
            onClick={handleNext}
            type="button"
            variant="default"
          >
            Continue
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mt-4 w-full max-w-sm font-bold text-emerald-600 text-sm">
        Contact & Role <span className="float-right">2/2</span>
      </div>

      <form
        className="mt-6 w-full max-w-sm space-y-4"
        onSubmit={hookFormSubmit(onSubmit)}
      >
        <div className="space-y-1">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                label="Business Email Address"
                onChange={(e) => {
                  field.onChange(e.target.value);
                  syncFormData();
                }}
                placeholder="Enter business email"
                value={field.value}
              />
            )}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Controller
            control={control}
            name="telephone"
            render={({ field }) => (
              <TextInput
                label="Telephone Number"
                onChange={(e) => {
                  field.onChange(e.target.value);
                  syncFormData();
                }}
                placeholder="Enter telephone number"
                value={field.value}
              />
            )}
          />
          {errors.telephone && (
            <p className="mt-1 text-red-500 text-xs">
              {errors.telephone.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="mb-3 block font-medium text-gray-700 text-sm">
            Select Role
          </label>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <div className="space-y-4">
                <div className="flex gap-4 py-3">
                  <label className="flex cursor-pointer items-center gap-3 text-sm">
                    <input
                      checked={field.value === "pharmacy"}
                      className="h-4 w-4 accent-emerald-600"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        syncFormData();
                      }}
                      type="radio"
                      value="pharmacy"
                    />
                    <span>Pharmacy</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 text-sm">
                    <input
                      checked={field.value === "otc"}
                      className="h-4 w-4 accent-emerald-600"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        syncFormData();
                      }}
                      type="radio"
                      value="otc"
                    />
                    <span>OTC</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 text-sm">
                    <input
                      checked={field.value === "supplier"}
                      className="h-4 w-4 accent-emerald-600"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        syncFormData();
                      }}
                      type="radio"
                      value="supplier"
                    />
                    <span>Supplier</span>
                  </label>
                </div>
              </div>
            )}
          />
          {errors.role && (
            <p className="mt-1 text-red-500 text-xs">{errors.role.message}</p>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1"
            onClick={handleBack}
            type="button"
            variant="outline"
          >
            Back
          </Button>
          <Button
            className="flex-1"
            disabled={isloading}
            type="submit"
            variant="default"
          >
            {isloading ? <Loader /> : "Register Business"}
          </Button>
        </div>
      </form>
    </>
  );
}
