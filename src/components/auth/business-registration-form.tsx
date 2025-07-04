<<<<<<< HEAD
"use client"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

import TextInput from "@/components/ui/text-input"
import Loader from "@/components/loader"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthStore } from "@/lib/mock-auth/auth"


// Complete schema for all form fields
const formSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  ownerName: z.string().min(1, "Owner/Manager name is required"),
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Telephone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["pharmacy", "supplier","otc"], {
    required_error: "Please select a role",
  }),
})

type FormData = z.infer<typeof formSchema>

interface BusinessRegistrationFormProps {
  onSuccess?: () => void
}

export default function BusinessRegistrationForm({ onSuccess }: BusinessRegistrationFormProps) {
  const { register, isLoading, error, clearError } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)

  const {
    control,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      location: "",
      email: "",
      telephone: "",
      password: "",
      role: undefined,
    },
    mode: "onChange",
  })

  const handleNext = async () => {
    const isValid = await trigger(["businessName", "ownerName", "location"])
    if (isValid) {
      setCurrentStep(2)
      toast.success("Step 1 completed! Please fill in your contact details.", {
        icon: "✅",
      })
    } else {
      toast.error("Please fill in all required fields correctly.", {
        icon: "❌",
      })
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  const onSubmit = async (data: FormData) => {
    clearError()

    // Show loading toast
    const loadingToast = toast.loading("Creating your account...", {
      icon: "⏳",
    })

    const result = await register({
      businessName: data.businessName,
      ownerName: data.ownerName,
      location: data.location,
      email: data.email,
      telephone: data.telephone,
      password: data.password,
      role: data.role,
    })

    // Dismiss loading toast
    toast.dismiss(loadingToast)

    if (result.success) {
      reset()
      onSuccess?.()
    }
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
      {error && (
        <div className="w-full max-w-sm bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-sm mb-4">
          {error}
        </div>
      )}
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
                }}
              />
            )}
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
        </div>

        <div className="space-y-1">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Enter password"
                label="Password"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
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
                      onChange={(e) => field.onChange(e.target.value)}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>PHARMACY</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input
                      type="radio"
                      value="supplier"
                      checked={field.value === "supplier"}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>SUPPLIER</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input
                      type="radio"
                      value="otc"
                      checked={field.value === "otc"}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    <span>OTC</span>
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
          <Button className="flex-1" variant="default" type="submit" disabled={isLoading}>
            {isLoading ? <Loader /> : "Register Business"}
          </Button>
        </div>
      </form>
    </>
  )
}
=======
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import type React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Loader from '@/components/loader';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/ui/text-input';

// Complete schema for all form fields
const formSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  ownerName: z.string().min(1, 'Owner/Manager name is required'),
  location: z.string().min(1, 'Location is required'),
  email: z.string().email('Please enter a valid email address'),
  telephone: z.string().min(1, 'Telephone number is required'),
  role: z.enum(['pharmacy', 'otc', 'supplier'], {
    required_error: 'Please select a role',
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
      businessName: formData?.businessName || '',
      ownerName: formData?.ownerName || '',
      location: formData?.location || '',
      email: formData?.email || '',
      telephone: formData?.telephone || '',
      role: (formData?.role as 'pharmacy' | 'otc' | 'supplier') || undefined,
    },
    mode: 'onChange',
  });

  // Sync form values with parent state whenever form values change
  const syncFormData = () => {
    const currentValues = getValues();
    setFormData({
      businessName: currentValues.businessName || '',
      ownerName: currentValues.ownerName || '',
      location: currentValues.location || '',
      email: currentValues.email || '',
      telephone: currentValues.telephone || '',
      role: currentValues.role || '',
    });
  };

  const handleNext = async () => {
    syncFormData();
    const isValid = await trigger(['businessName', 'ownerName', 'location']);
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
      type: 'submit',
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
                      checked={field.value === 'pharmacy'}
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
                      checked={field.value === 'otc'}
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
                      checked={field.value === 'supplier'}
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
            {isloading ? <Loader /> : 'Register Business'}
          </Button>
        </div>
      </form>
    </>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
