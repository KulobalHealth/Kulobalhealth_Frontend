'use client';

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
import { useSuppliersStore } from '@/store/suppliers';

interface AddSupplierModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function AddSupplierModal({ isOpen, onClose }: AddSupplierModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    telephone: '',
    email: '',
    address: '',
    agentName: '',
    agentNumber: '',
  });

  const { addSupplier } = useSuppliersStore();

  const handleSave = () => {
    if (!(formData.companyName && formData.email && formData.agentName)) {
      return;
    }

    addSupplier({
      companyName: formData.companyName,
      telephone: formData.telephone,
      email: formData.email,
      address: formData.address,
      agentName: formData.agentName,
      agentNumber: formData.agentNumber,
      status: 'Active',
      statusColor: 'green',
    });

    // Reset form
    setFormData({
      companyName: '',
      telephone: '',
      email: '',
      address: '',
      agentName: '',
      agentNumber: '',
    });

    onClose();
  };

  const handleCancel = () => {
    setFormData({
      companyName: '',
      telephone: '',
      email: '',
      address: '',
      agentName: '',
      agentNumber: '',
    });
    onClose();
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Supplier</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Supplier Information */}
          <div>
            <h3 className="mb-4 font-medium">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name *</Label>
                <Input
                  id="company-name"
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="Enter company name"
                  value={formData.companyName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  id="telephone"
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                  placeholder="e.g., 0303435454"
                  value={formData.telephone}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter email address"
                  type="email"
                  value={formData.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Enter company address"
                  value={formData.address}
                />
              </div>
            </div>
          </div>

          {/* Agent Information */}
          <div>
            <h3 className="mb-4 font-medium">Agent Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agent-name">Agent Name *</Label>
                <Input
                  id="agent-name"
                  onChange={(e) =>
                    setFormData({ ...formData, agentName: e.target.value })
                  }
                  placeholder="Enter agent name"
                  value={formData.agentName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="agent-phone">Agent Phone Number</Label>
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
                    id="agent-phone"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agentNumber: e.target.value,
                      })
                    }
                    placeholder="e.g., 0540077343"
                    value={formData.agentNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button
            className="bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50"
            disabled={
              !(formData.companyName && formData.email && formData.agentName)
            }
            onClick={handleSave}
          >
            Add Supplier
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
