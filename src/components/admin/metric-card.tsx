import { ArrowUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
  showBadge?: boolean;
  badgeText?: string;
  formatCurrency?: boolean;
}

export function MetricCard({
  title,
  value,
  showBadge = false,
  badgeText = '100%',
  formatCurrency = false,
}: MetricCardProps) {
  const formattedValue =
    formatCurrency && typeof value === 'number' ? value.toFixed(2) : value;

  return (
    <Card className="min-h-[120px] bg-white shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="mb-1 text-gray-600 text-sm">{title}</div>
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl">{formattedValue}</div>
          {showBadge && (
            <Badge className="flex items-center gap-1 bg-primary-100 text-primary-700 text-xs">
              <span>
                <ArrowUp className="h-4 w-4" />
              </span>
              {badgeText}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
