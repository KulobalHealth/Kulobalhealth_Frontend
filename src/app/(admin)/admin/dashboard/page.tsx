'use client';

import type { DateRange } from 'react-day-picker';
import { DashboardMetrics } from '@/components/admin/dashboard-metrics';
import { DateRangeControls } from '@/components/admin/date-range-controls';
import { PerformingProductsChart } from '@/components/admin/performing-products-chart';
import { ProductOrdersChart } from '@/components/admin/product-orders-chart';
import { RecentOrdersTable } from '@/components/admin/recent-orders-table';
import { useAdminDashboardStore } from '@/store/admin-dashboard';

export default function Component() {
  const {
    metrics,
    productOrdersData,
    performingProducts,
    recentOrders,
    selectedDateRange,
    setSelectedDateRange,
  } = useAdminDashboardStore();

  const handleCustomDateRangeChange = (dateRange: DateRange | undefined) => {
    console.log('Custom date range selected:', dateRange);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h1 className="mb-4 font-bold text-2xl">Dashboard</h1>
        <DateRangeControls
          onCustomDateRangeChange={handleCustomDateRangeChange}
          onDateRangeChange={setSelectedDateRange}
          selectedDateRange={selectedDateRange}
        />
      </div>

      <DashboardMetrics metrics={metrics} />

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProductOrdersChart data={productOrdersData} />
        <PerformingProductsChart data={performingProducts} />
      </div>

      <RecentOrdersTable orders={recentOrders} />
    </div>
  );
}
