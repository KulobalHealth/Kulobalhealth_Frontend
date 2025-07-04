"use client";

import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DDIIntegrator } from "@/store/ddi-integrators";

interface EditIntegratorModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly integrator: DDIIntegrator | null;
  readonly onSave: (id: string, integrator: Partial<DDIIntegrator>) => void;
}

export function EditIntegratorModal({
  isOpen,
  onClose,
  integrator,
  onSave,
}: EditIntegratorModalProps) {
  const [formData, setFormData] = useState({
    productName: "",
    companyName: "",
    softwareType: "",
    apiKey: "",
    email: "",
    phoneNumber: "",
    description: "",
    contactPerson: "",
    website: "",
  });

  useEffect(() => {
    if (integrator) {
      setFormData({
        productName: integrator.productName,
        companyName: integrator.company,
        softwareType: integrator.softwareType,
        apiKey: integrator.apiKey,
        email: integrator.email,
        phoneNumber: integrator.phoneNumber,
        description: integrator.description ?? "",
        contactPerson: integrator.contactPerson ?? "",
        website: integrator.website ?? "",
      });
    }
  }, [integrator]);

  const handleSave = () => {
    if (!integrator) return;

    const updatedIntegrator = {
      productName: formData.productName,
      company: formData.companyName,
      softwareType: formData.softwareType as
        | "Web System"
        | "Mobile App"
        | "Desktop App",
      apiKey: formData.apiKey,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      description: formData.description,
      contactPerson: formData.contactPerson,
      website: formData.website,
    };

    onSave(integrator.id, updatedIntegrator);
    onClose();
  };

  if (!integrator) return null;

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit DDI Integration Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-600" />
              <div>
                <span className="text-gray-600 text-sm">Integration Date</span>
                <div className="font-medium">Thu 7 Dec, 2025</div>
              </div>
            </div>
            <div>
              <span className="text-gray-600 text-sm">Status</span>
              <div>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-product-name">Product Name</Label>
                <Input
                  id="edit-product-name"
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  value={formData.productName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-company-name">Company Name</Label>
                <Input
                  id="edit-company-name"
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  value={formData.companyName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-software-type">Software Type</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, softwareType: value })
                  }
                  value={formData.softwareType}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web System">Web System</SelectItem>
                    <SelectItem value="Mobile App">Mobile App</SelectItem>
                    <SelectItem value="Desktop App">Desktop App</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-api-key">API Key</Label>
                <Input
                  id="edit-api-key"
                  onChange={(e) =>
                    setFormData({ ...formData, apiKey: e.target.value })
                  }
                  value={formData.apiKey}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  value={formData.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-phone">Phone Number</Label>
                <div className="flex">
                  <Select defaultValue="+233">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+233">🇬🇭 +233</SelectItem>
                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    className="ml-2 flex-1"
                    id="edit-phone"
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    value={formData.phoneNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
