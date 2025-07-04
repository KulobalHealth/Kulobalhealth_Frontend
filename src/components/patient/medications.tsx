import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Medication } from "@/lib/data";

interface PatientMedicationsProps {
  medications: Medication[];
}

export function PatientMedications({
  medications = [],
}: PatientMedicationsProps) {
  return (
    <div className="rounded-md border p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-medium text-lg">Medications</h2>
        <div className="flex space-x-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600" size="sm">
            <svg
              className="mr-1"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Medication
          </Button>
        </div>
      </div>

      {medications.length > 0 ? (
        <div className="overflow-hidden rounded-md border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-2 text-left font-medium">Name</th>
                <th className="p-2 text-left font-medium">Category</th>
                <th className="p-2 text-left font-medium">Type</th>
                <th className="p-2 text-left font-medium">Brand</th>
                <th className="p-2 text-left font-medium">Prescribed By</th>
                <th className="p-2 text-left font-medium">Dosage</th>
                <th className="p-2 text-left font-medium">Route</th>
                <th className="p-2 text-left font-medium">Date Started</th>
                <th className="p-2 text-left font-medium">Status</th>
                <th className="p-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((medication) => (
                <tr className="border-t hover:bg-muted/30" key={medication.id}>
                  <td className="p-2 font-medium">{medication.name}</td>
                  <td className="p-2">{medication.category}</td>
                  <td className="p-2">{medication.type}</td>
                  <td className="p-2">{medication.brand}</td>
                  <td className="p-2">{medication.prescribedBy}</td>
                  <td className="p-2">{medication.dosage}</td>
                  <td className="p-2">{medication.route}</td>
                  <td className="p-2">{medication.dateStarted}</td>
                  <td className="p-2">
                    <Badge
                      className={
                        medication.status === "Active"
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                          : medication.status === "Discontinued"
                          ? "bg-rose-100 text-rose-800 hover:bg-rose-100"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      }
                    >
                      {medication.status}
                    </Badge>
                  </td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <Button className="h-8 w-8 p-0" size="sm" variant="ghost">
                        <svg
                          fill="none"
                          height="16"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
                        </svg>
                      </Button>
                      <Button
                        className="h-8 w-8 p-0 text-rose-500"
                        size="sm"
                        variant="ghost"
                      >
                        <svg
                          fill="none"
                          height="16"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-md border bg-muted/10 py-16 text-center">
          <svg
            className="mx-auto mb-4 text-muted-foreground"
            fill="none"
            height="48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m19 21-4-4" />
            <path d="m21 19-4-4" />
            <path d="M9 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
            <path d="M5 5a4 4 0 0 1 4-4c1.5 0 3 .5 4 2 1-1.5 2.5-2 4-2a4 4 0 0 1 4 4c0 6-8 12-8 12S5 11 5 5Z" />
          </svg>
          <p className="font-medium text-xl">No medications</p>
          <p className="mb-4 text-muted-foreground">
            This patient doesn&apos;t have any medications recorded
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600" size="sm">
            <svg
              className="mr-1"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Medication
          </Button>
        </div>
      )}
    </div>
  );
}
