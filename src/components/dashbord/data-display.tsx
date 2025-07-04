<<<<<<< HEAD
import { Activity } from "lucide-react"

export function DataDisplay() {
  const data = [
    { label: "Consultations", value: 45, percentage: 75, color: "bg-green-500" },
    { label: "Lab Tests", value: 28, percentage: 60, color: "bg-green-600" },
    { label: "Prescriptions", value: 52, percentage: 85, color: "bg-green-700" },
    { label: "Follow-ups", value: 18, percentage: 40, color: "bg-green-800" },
  ]

  return (
    <div className="bg-white border-2 border-green-100 rounded-2xl p-6 dark:bg-transparent dark:border-gray-800 dark:text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Today&apos;s Activity</h3>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-xl border-2 border-green-200 dark:">
          <Activity className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-800">143 Total</span>
        </div>
      </div>
      <div className="space-y-6 dark:text-white">
        {data.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700 dark:text-white">{item.label}</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-gray-100 dark:bg-transparent dark:text-white">
              <div
                className={`${item.color} h-full rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{item.percentage}% of target</span>
              <span>Target: {Math.round(item.value / (item.percentage / 100))}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
=======
import { Bell } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function DataDisplay() {
  const alerts = [
    {
      id: 1,
      title: 'DDI Alert: Warfarin + Aspirin',
      patient: 'John Doe',
      risk: 'High Risk',
    },
    {
      id: 2,
      title: 'DDI Alert: Warfarin + Aspirin',
      patient: 'John Doe',
      risk: 'High Risk',
    },
    {
      id: 3,
      title: 'DDI Alert: Warfarin + Aspirin',
      patient: 'John Doe',
      risk: 'High Risk',
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
        <CardDescription>Important updates requiring attention</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            className="flex items-start space-x-3 border-b pb-3 last:border-none"
            key={alert.id}
          >
            <Bell className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium text-sm">{alert.title}</p>
              <p className="text-muted-foreground text-sm">
                Patient: {alert.patient}{' '}
                <span className="font-medium text-red-500">• {alert.risk}</span>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
