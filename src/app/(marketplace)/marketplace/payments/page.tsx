'use client';

import { PaymentsTable } from '@/components/marketplace/payments/payments-table';
import Sidebar from '../(orders)/sidebar';

export default function PaymentsPage() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8">
        <div className="p-4">
          <h2 className="font-bold text-xl">Payments & Transactions</h2>
        </div>
        <PaymentsTable />
      </div>
    </div>
  );
}
