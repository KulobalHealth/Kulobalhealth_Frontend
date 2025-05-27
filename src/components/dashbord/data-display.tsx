import { Bell } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function DataDisplay() {
    const alerts = [
        { id: 1, title: "DDI Alert: Warfarin + Aspirin", patient: "John Doe", risk: "High Risk" },
        { id: 2, title: "DDI Alert: Warfarin + Aspirin", patient: "John Doe", risk: "High Risk" },
        { id: 3, title: "DDI Alert: Warfarin + Aspirin", patient: "John Doe", risk: "High Risk" },
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Alerts & Notifications</CardTitle>
                <CardDescription>Important updates requiring attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 border-b pb-3 last:border-none">
                        <Bell className="w-5 h-5 mt-1 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">{alert.title}</p>
                            <p className="text-sm text-muted-foreground">
                                Patient: {alert.patient} <span className="text-red-500 font-medium">• {alert.risk}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
