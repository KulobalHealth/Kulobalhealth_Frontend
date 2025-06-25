import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const transactions = [
  {
    title: 'Malaria Test Kit',
    date: 'Jan 20, 2025',
    time: '13:35',
    amount: 'GHS 43.00',
  },
  {
    title: 'Malaria Test Kit',
    date: 'Jan 20, 2025',
    time: '13:35',
    amount: 'GHS 43.00',
  },
  {
    title: 'Malaria Test Kit',
    date: 'Jan 20, 2025',
    time: '13:35',
    amount: 'GHS 43.00',
  },
];

export default function RecentTransactions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest financial activities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            className="flex items-start space-x-3 border-b pb-3 last:border-none"
            key={index}
          >
            <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium text-sm">{tx.title}</p>
              <p className="text-muted-foreground text-sm">
                {tx.date} • {tx.time}{' '}
                <span className="font-medium text-green-600">
                  • {tx.amount}
                </span>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
