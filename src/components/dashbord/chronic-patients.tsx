import { Card, CardContent } from "@/components/ui/card"

const patients = [
    {
        name: "John Doe",
        conditions: "Hypertension, Diabetes",
    },
    {
        name: "John Doe",
        conditions: "Hypertension, Diabetes",
    },
    {
        name: "John Doe",
        conditions: "Hypertension, Diabetes",
    },
]

export default function ChronicCarePatients() {
    return (
        <Card className="w-full  rounded-xl">
            <div className="flex items-center justify-between p-4 pb-0">
                <div>
                    <h2 className="text-lg font-semibold">Chronic Care Patients</h2>
                    <p className="text-sm text-muted-foreground">
                        Patients requiring regular monitoring
                    </p>
                </div>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                    View All →
                </a>
            </div>

            <CardContent className="pt-2 divide-y divide-border">
                {patients.map((patient, index) => (
                    <div key={index} className="py-3">
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-sm text-muted-foreground">{patient.conditions}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
