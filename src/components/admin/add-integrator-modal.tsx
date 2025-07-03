import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { DDIIntegrator } from '@/store/ddi-integrators';

interface AddIntegratorModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onSave: (integrator: Omit<DDIIntegrator, 'id'>) => void;
}

export function AddIntegratorModal({
  isOpen,
  onClose,
  onSave,
}: AddIntegratorModalProps) {
  const [formData, setFormData] = useState({
    productName: '',
    companyName: '',
    softwareType: '',
    apiKey: '',
    email: '',
    phoneNumber: '',
    description: '',
    contactPerson: '',
    website: '',
  });

  const handleSave = () => {
    const integrator = {
      productName: formData.productName,
      company: formData.companyName,
      softwareType: formData.softwareType as
        | 'Web System'
        | 'Mobile App'
        | 'Desktop App',
      apiKey: formData.apiKey,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      description: formData.description,
      contactPerson: formData.contactPerson,
      website: formData.website,
      integrationDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      status: 'Active' as const,
    };

    onSave(integrator);
    onClose();

    // Reset form
    setFormData({
      productName: '',
      companyName: '',
      softwareType: '',
      apiKey: '',
      email: '',
      phoneNumber: '',
      description: '',
      contactPerson: '',
      website: '',
    });
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Company For DDI Integration</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Company Information */}
          <div>
            <h3 className="mb-4 font-medium">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  placeholder="Enter product name"
                  value={formData.productName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  id="company-name"
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="Eg. ABCD company name"
                  value={formData.companyName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="software-type">Software Type</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, softwareType: value })
                  }
                  value={formData.softwareType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web System">Web System</SelectItem>
                    <SelectItem value="Mobile App">Mobile App</SelectItem>
                    <SelectItem value="Desktop App">Desktop App</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  onChange={(e) =>
                    setFormData({ ...formData, apiKey: e.target.value })
                  }
                  placeholder="Enter API key"
                  value={formData.apiKey}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="contact-person">Contact Person</Label>
                <Input
                  id="contact-person"
                  onChange={(e) =>
                    setFormData({ ...formData, contactPerson: e.target.value })
                  }
                  placeholder="Enter contact person name"
                  value={formData.contactPerson}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Brief description of the integration"
                  value={formData.description}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 font-medium">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter email"
                  type="email"
                  value={formData.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="+233 540077343"
                  value={formData.phoneNumber}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  placeholder="https://company-website.com"
                  value={formData.website}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 border-t pt-4">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600"
            disabled={
              !(
                formData.productName &&
                formData.companyName &&
                formData.softwareType
              )
            }
            onClick={handleSave}
          >
            Add Record
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
