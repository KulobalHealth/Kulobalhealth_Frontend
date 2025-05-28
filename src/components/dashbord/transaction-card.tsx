import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const transactions = [
    {
        title: "Malaria Test Kit",
        date: "Jan 20, 2025",
        time: "13:35",
        amount: "GHS 43.00",
    },
    {
        title: "Malaria Test Kit",
        date: "Jan 20, 2025",
        time: "13:35",
        amount: "GHS 43.00",
    },
    {
        title: "Malaria Test Kit",
        date: "Jan 20, 2025",
        time: "13:35",
        amount: "GHS 43.00",
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
                    <div key={index} className="flex items-start space-x-3 border-b pb-3 last:border-none">
                        <ArrowUpRight className="w-5 h-5 mt-1 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">{tx.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {tx.date} • {tx.time} <span className="text-green-600 font-medium">• {tx.amount}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
