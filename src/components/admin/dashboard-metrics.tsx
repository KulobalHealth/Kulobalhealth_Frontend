import type { DashboardMetrics } from '@/store/admin-dashboard';
import { MetricCard } from './metric-card';

interface DashboardMetricsProps {
  metrics: DashboardMetrics;
}

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          showBadge
          title="Total Pharmacies"
          value={metrics.totalPharmacies}
        />
        <MetricCard
          showBadge
          title="Total Patients"
          value={metrics.totalPatients}
        />
        <MetricCard
          showBadge
          title="Total Suppliers"
          value={metrics.totalSuppliers}
        />
        <MetricCard
          formatCurrency
          title="Total Sales (GHS)"
          value={metrics.totalSales}
        />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <MetricCard
          showBadge
          title="Total Defaulters"
          value={metrics.totalDefaulters}
        />
        <MetricCard
          formatCurrency
          title="Outstanding Payment (GHS)"
          value={metrics.outstandingPayment}
        />
        <MetricCard
          showBadge
          title="Total DD Users"
          value={metrics.totalDDUsers}
        />
      </div>
    </>
  );
}
