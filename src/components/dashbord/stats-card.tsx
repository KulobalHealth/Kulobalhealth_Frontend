"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//Properties for the StatsCard component
interface StatsCardProps {
  title: string;
  value: string | number;
  discription: string;
  icon: React.ReactNode;
}

export default function StatsCard({
  title,
  value,
  discription,
  icon,
}: StatsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
        <CardTitle className="font-medium text-sm">{title}</CardTitle>
        <span className="h-4 w-4 text-muted-foreground">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="p-3 font-bold text-4xl">{value}</div>
        <p className="text-muted-foreground text-xs">{discription}</p>
      </CardContent>
    </Card>
  );
}
