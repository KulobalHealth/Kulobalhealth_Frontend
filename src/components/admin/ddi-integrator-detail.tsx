'use client';

import { ArrowLeft, Calendar, Globe, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useDDIIntegratorsStore } from '@/store/ddi-integrators';

const getSoftwareTypeBadgeClass = (type: string) => {
  switch (type) {
    case 'Mobile App':
      return 'bg-gray-800 text-white border-gray-800 mt-1';
    case 'Desktop App':
      return 'bg-gray-600 text-white border-gray-600 mt-1';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-300 mt-1';
  }
};

export function DDIIntegratorDetail() {
  const { selectedIntegratorId, getIntegratorById, setCurrentView } =
    useDDIIntegratorsStore();

  if (!selectedIntegratorId) {
    return null;
  }

  const integrator = getIntegratorById(selectedIntegratorId);

  if (!integrator) {
    return (
      <div className="flex h-64 flex-col items-center justify-center">
        <p className="mb-4 text-gray-500">Integrator not found</p>
        <Button onClick={() => setCurrentView('list')} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            className="text-gray-600"
            onClick={() => setCurrentView('list')}
            size="sm"
            variant="ghost"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Integrators
          </Button>
          <div>
            <h1 className="font-bold text-2xl">{integrator.productName}</h1>
            <p className="text-gray-600">{integrator.company}</p>
          </div>
        </div>
        <Badge
          className={
            integrator.status === 'Active'
              ? 'bg-green-100 text-green-700 hover:bg-green-100'
              : 'bg-red-100 text-red-700 hover:bg-red-100'
          }
          variant={integrator.status === 'Active' ? 'default' : 'destructive'}
        >
          {integrator.status}
        </Badge>
      </div>

      {/* Integration Details */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Basic Information */}
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 font-semibold text-lg">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <div className="font-medium text-gray-500 text-sm">
                Product Name
              </div>
              <p className="mt-1 text-gray-900">{integrator.productName}</p>
            </div>
            <div>
              <div className="font-medium text-gray-500 text-sm">Company</div>
              <p className="mt-1 text-gray-900">{integrator.company}</p>
            </div>
            <div>
              <div className="font-medium text-gray-500 text-sm">
                Software Type
              </div>
              <Badge
                className={getSoftwareTypeBadgeClass(integrator.softwareType)}
                variant="outline"
              >
                {integrator.softwareType}
              </Badge>
            </div>
            <div>
              <div className="font-medium text-gray-500 text-sm">
                Integration Date
              </div>
              <div className="mt-1 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <p className="text-gray-900">{integrator.integrationDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 font-semibold text-lg">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <div className="font-medium text-gray-500 text-sm">Email</div>
              <div className="mt-1 flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <p className="text-gray-900">{integrator.email}</p>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-500 text-sm">
                Phone Number
              </div>
              <div className="mt-1 flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <p className="text-gray-900">{integrator.phoneNumber}</p>
              </div>
            </div>
            {integrator.contactPerson && (
              <div>
                <div className="font-medium text-gray-500 text-sm">
                  Contact Person
                </div>
                <p className="mt-1 text-gray-900">{integrator.contactPerson}</p>
              </div>
            )}
            {integrator.website && (
              <div>
                <div className="font-medium text-gray-500 text-sm">Website</div>
                <div className="mt-1 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <a
                    className="text-blue-600 underline hover:text-blue-800"
                    href={integrator.website}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {integrator.website}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Details */}
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 font-semibold text-lg">Technical Details</h3>
          <div className="space-y-4">
            <div>
              <div className="font-medium text-gray-500 text-sm">API Key</div>
              <p className="mt-1 rounded border bg-gray-50 p-2 font-mono text-gray-900 text-sm">
                {integrator.apiKey}
              </p>
            </div>
            <div>
              <div className="font-medium text-gray-500 text-sm">Status</div>
              <div className="mt-1">
                <Badge
                  className={
                    integrator.status === 'Active'
                      ? 'bg-green-100 text-green-700 hover:bg-green-100'
                      : 'bg-red-100 text-red-700 hover:bg-red-100'
                  }
                  variant={
                    integrator.status === 'Active' ? 'default' : 'destructive'
                  }
                >
                  {integrator.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {integrator.description && (
          <div className="rounded-lg border bg-white p-6">
            <h3 className="mb-4 font-semibold text-lg">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {integrator.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
