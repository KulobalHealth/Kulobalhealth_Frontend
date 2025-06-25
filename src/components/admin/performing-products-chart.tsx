import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PerformingProduct } from '@/store/admin-dashboard';

interface PerformingProductsChartProps {
  data: PerformingProduct[];
}

export function PerformingProductsChart({
  data,
}: PerformingProductsChartProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-center text-lg">
          Highly Performing Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <ResponsiveContainer height={200} width="100%">
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                data={data}
                dataKey="value"
                innerRadius={40}
                outerRadius={80}
              >
                {data.map((entry) => (
                  <Cell fill={entry.color} key={entry.name} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 w-full space-y-3">
            {data.map((product) => (
              <div className="flex items-center gap-2" key={product.name}>
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: product.color }}
                />
                <div className="flex-1 text-center text-sm">
                  <div className="font-medium">{product.name}</div>
                  <div className="text-gray-500">{product.value} Orders</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
