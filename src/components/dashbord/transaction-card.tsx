<<<<<<< HEAD
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"

export default function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: "income",
      amount: "GHS 2,500",
      description: "Patient Consultation",
      time: "2 hours ago",
      category: "Consultation",
    },
    {
      id: 2,
      type: "expense",
      amount: "GHS 800",
      description: "Medical Supplies",
      time: "4 hours ago",
      category: "Supplies",
    },
    {
      id: 3,
      type: "income",
      amount: "GHS 1,200",
      description: "Lab Test",
      time: "6 hours ago",
      category: "Laboratory",
    },
    { id: 4, type: "income", amount: "GHS 3,000", description: "Surgery Fee", time: "1 day ago", category: "Surgery" },
    { id: 5, type: "income", amount: "GHS 450", description: "Prescription", time: "2 days ago", category: "Pharmacy" },
  ]

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number.parseInt(t.amount.replace("GHS ", "").replace(",", "")), 0)

  return (
    <div className="bg-white border-2 border-green-100 rounded-2xl p-6 dark:bg-transparent dark:text-white dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-xl border-2 border-green-200">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-800">GHS {totalIncome.toLocaleString()}</span>
        </div>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-green-200 transition-all duration-200 dark:bg-transparent dark:text-white dark:border-0"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl border-2 ${
                  transaction.type === "income"
                    ? "bg-green-100 text-green-600 border-green-200"
                    : "bg-red-100 text-red-600 border-red-200"
                }`}
              >
                {transaction.type === "income" ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowDownRight className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{transaction.description}</p>
                <div className="flex items-center space-x-2 mt-1 dark:text-white ">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {transaction.category}
                  </span>
                  <span className="text-sm text-gray-500">{transaction.time}</span>
                </div>
              </div>
            </div>
            <span className={`font-bold text-lg ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
              {transaction.type === "income" ? "+" : "-"}
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
