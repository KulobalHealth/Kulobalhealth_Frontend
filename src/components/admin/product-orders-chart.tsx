import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProductOrderData } from '@/store/admin-dashboard';

interface ProductOrdersChartProps {
  data: ProductOrderData[];
}

export function ProductOrdersChart({ data }: ProductOrdersChartProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg">Product Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={300} width="100%">
          <BarChart data={data}>
            <XAxis axisLine={false} dataKey="month" tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
              {data.map((entry) => (
                <Cell fill={entry.color} key={entry.month} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
