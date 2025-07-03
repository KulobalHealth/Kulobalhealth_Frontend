import { Card, CardContent } from '@/components/ui/card';

const patients = [
  {
    name: 'John Doe',
    conditions: 'Hypertension, Diabetes',
  },
  {
    name: 'John Doe',
    conditions: 'Hypertension, Diabetes',
  },
  {
    name: 'John Doe',
    conditions: 'Hypertension, Diabetes',
  },
];

export default function ChronicCarePatients() {
  return (
    <Card className="w-full rounded-xl">
      <div className="flex items-center justify-between p-4 pb-0">
        <div>
          <h2 className="font-semibold text-lg">Chronic Care Patients</h2>
          <p className="text-muted-foreground text-sm">
            Patients requiring regular monitoring
          </p>
        </div>
        <a
          className="font-medium text-primary text-sm hover:underline"
          href="#"
        >
          View All →
        </a>
      </div>

      <CardContent className="divide-y divide-border pt-2">
        {patients.map((patient, index) => (
          <div className="py-3" key={index}>
            <div className="font-medium">{patient.name}</div>
            <div className="text-muted-foreground text-sm">
              {patient.conditions}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
