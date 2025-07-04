import { Bell } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DataDisplay() {
  const alerts = [
    {
      id: 1,
      title: "DDI Alert: Warfarin + Aspirin",
      patient: "John Doe",
      risk: "High Risk",
    },
    {
      id: 2,
      title: "DDI Alert: Warfarin + Aspirin",
      patient: "John Doe",
      risk: "High Risk",
    },
    {
      id: 3,
      title: "DDI Alert: Warfarin + Aspirin",
      patient: "John Doe",
      risk: "High Risk",
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
                Patient: {alert.patient}{" "}
                <span className="font-medium text-red-500">• {alert.risk}</span>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
