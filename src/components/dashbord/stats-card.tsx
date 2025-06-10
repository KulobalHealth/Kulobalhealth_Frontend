"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

//Properties for the StatsCard component
interface StatsCardProps {
    title: string;
    value: string | number;
    discription: string;
    icon: React.ReactNode;
}

export default function StatsCard({title, value, discription, icon}:StatsCardProps) {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <span className="h-4 w-4 text-muted-foreground">{icon}</span>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold p-3">{value}</div>
                <p className="text-xs text-muted-foreground">{discription}</p>
            </CardContent>
        </Card>
    );
}
