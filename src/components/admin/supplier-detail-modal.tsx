'use client';

import { Building2, Calendar, Edit, Mail, MapPin, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import type { Supplier } from '@/store/suppliers';

interface SupplierDetailModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly supplier: Supplier | null;
  readonly onEdit: (supplier: Supplier) => void;
}

export function SupplierDetailModal({
  isOpen,
  onClose,
  supplier,
  onEdit,
}: SupplierDetailModalProps) {
  if (!supplier) return null;

  const getStatusColor = (status: Supplier['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-semibold text-gray-900 text-xl">
            Supplier Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header with Status and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 text-lg">
                  {supplier.companyName}
                </h2>
                <Badge className={getStatusColor(supplier.status)}>
                  {supplier.status}
                </Badge>
              </div>
            </div>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => onEdit(supplier)}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Supplier
            </Button>
          </div>

          <Separator />

          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="font-medium text-gray-900 text-lg">
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Building2 className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Company ID</p>
                    <p className="font-medium font-mono text-gray-900">
                      {supplier.id}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Telephone</p>
                    <p className="font-medium text-gray-900">
                      {supplier.telephone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium text-gray-900">
                      {supplier.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Calendar className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Joined Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date(supplier.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <MapPin className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Address</p>
                  <p className="font-medium text-gray-900">
                    {supplier.address}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agent Information */}
          <Card>
            <CardHeader>
              <CardTitle className="font-medium text-gray-900 text-lg">
                Agent Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-medium text-blue-600 text-sm">
                    {supplier.agentName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {supplier.agentName}
                  </p>
                  <p className="text-gray-500 text-sm">Primary Contact Agent</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <Phone className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Agent Number</p>
                  <p className="font-medium text-gray-900">
                    {supplier.agentNumber}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-medium text-gray-900 text-lg">
                Business Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="font-bold text-2xl text-gray-900">
                    {supplier.totalOrders}
                  </p>
                  <p className="text-gray-500 text-sm">Total Orders</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="font-bold text-2xl text-gray-900">
                    {supplier.totalRevenue}
                  </p>
                  <p className="text-gray-500 text-sm">Total Revenue</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="font-medium text-gray-900 text-sm">
                    {supplier.lastActivity}
                  </p>
                  <p className="text-gray-500 text-sm">Last Activity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
