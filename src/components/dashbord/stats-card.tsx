<<<<<<< HEAD
import type React from "react"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: string
  color?: string
}

export default function StatCard({ title, value, description, icon, trend, color = "bg-green-600" }: StatCardProps) {
  const isPositiveTrend = trend?.startsWith("+")

  return (
    <div className="bg-white border-2 border-green-100   dark:bg-transparent dark:text-white dark:border-gray-700 rounded-2xl p-6 hover:border-green-300 transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 ${color} rounded-xl text-white`}>{icon}</div>
        {trend && (
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full border-2 ${
              isPositiveTrend ? "text-green-700 bg-green-50 border-green-200 " : "text-red-700 bg-red-50 border-red-200"
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide dark:text-white">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">{value}</p>
        <p className="text-sm text-gray-500 dark:text-white">{description}</p>
      </div>
    </div>
  )
}
=======
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
