'use client';

import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { PaymentModal } from '@/components/admin/payment-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePharmaciesStore } from '@/store/pharmacies';

interface PharmacyDetailProps {
  readonly pharmacyId: string;
  readonly onBack: () => void;
}

const transactionHistory = [
  {
    id: '1',
    description: 'Malaria Test Kit #PHARM0000AA',
    lastPaymentDate: '7th April, 2025',
    amountPaid: 'GHS 500.00',
    remainingAmount: 'GHS 3000.00',
    status: 'Pending',
  },
  {
    id: '2',
    description: 'Malaria Test Kit #PHARM0000AA',
    lastPaymentDate: '7th April, 2025',
    amountPaid: 'GHS 500.00',
    remainingAmount: 'GHS 4000.00',
    status: 'Pending',
  },
];

export default function PharmacyDetail({
  pharmacyId,
  onBack,
}: PharmacyDetailProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { getPharmacyById } = usePharmaciesStore();
  const pharmacy = getPharmacyById(pharmacyId);

  if (!pharmacy) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mb-6 flex items-center gap-4">
          <Button onClick={onBack} size="sm" variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="font-bold text-2xl">Pharmacy Not Found</h1>
        </div>
        <p className="text-gray-600">
          The requested pharmacy could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6 flex items-center gap-4">
        <Button onClick={onBack} size="sm" variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl">{pharmacy.name}</h1>
          <Badge
            className={
              pharmacy.status === 'Active'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }
          >
            {pharmacy.status}
          </Badge>
          <Badge className="bg-blue-100 text-blue-700">Premium</Badge>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pharmacy Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pharmacy Name:</span>
              <span>{pharmacy.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pharmacy License Number:</span>
              <span>{pharmacy.licenseNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pharmacy Location:</span>
              <span>{pharmacy.address}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Registration Date:</span>
              <span>{pharmacy.registrationDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Number of Branches:</span>
              <span>{pharmacy.branches}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Contact:</span>
              <span>{pharmacy.contact}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Email:</span>
              <span>{pharmacy.email}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Branches:</span>
              <span>24</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pharmacist Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pharmacist Name:</span>
              <span>Orlando Diggs</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Pharmacist License Number:</span>
              <span>LN0000001</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Email:</span>
              <span>orlando@gmail.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Phone Number:</span>
              <span>0540077343</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium">Current Plan</h3>
              <p className="text-gray-600 text-sm">Premium Plan</p>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Premium Plan</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payments & Transactions</CardTitle>
            <Button onClick={() => setIsPaymentModalOpen(true)}>
              Record Payment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="mb-1 text-gray-600 text-sm">
              Outstanding Balance
            </div>
            <div className="font-bold text-2xl">GHS 3000.00</div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Transaction History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-gray-200 border-b">
                  <tr>
                    <th className="py-2 text-left font-medium text-gray-700 text-sm">
                      Description
                    </th>
                    <th className="py-2 text-left font-medium text-gray-700 text-sm">
                      Last Payment Date
                    </th>
                    <th className="py-2 text-left font-medium text-gray-700 text-sm">
                      Amount Paid
                    </th>
                    <th className="py-2 text-left font-medium text-gray-700 text-sm">
                      Remaining Amount
                    </th>
                    <th className="py-2 text-left font-medium text-gray-700 text-sm">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((transaction) => (
                    <tr
                      className="border-gray-100 border-b"
                      key={transaction.id}
                    >
                      <td className="py-3 text-sm">
                        {transaction.description}
                      </td>
                      <td className="py-3 text-gray-600 text-sm">
                        {transaction.lastPaymentDate}
                      </td>
                      <td className="py-3 text-sm">{transaction.amountPaid}</td>
                      <td className="py-3 text-sm">
                        {transaction.remainingAmount}
                      </td>
                      <td className="py-3">
                        <Badge
                          className="border-orange-200 text-orange-600"
                          variant="outline"
                        >
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        pharmacyName="Humble Pharmacy"
      />
    </div>
  );
}
