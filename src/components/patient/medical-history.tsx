import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Allergy, MedicalCondition } from "@/lib/data";

interface MedicalHistoryProps {
  medicalConditions: MedicalCondition[];
  allergies: Allergy[];
}

export function MedicalHistory({
  medicalConditions = [],
  allergies = [],
}: MedicalHistoryProps) {
  return (
    <div className="rounded-md border p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-medium text-lg">Medical History</h2>
        <div className="flex space-x-2">
          <Button
            className="border-rose-500 text-rose-500 hover:bg-rose-50"
            size="sm"
            variant="outline"
          >
            Delete All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="conditions">
        <TabsList className="mb-4">
          <TabsTrigger value="conditions">Medical Conditions</TabsTrigger>
          <TabsTrigger value="allergies">Allergies</TabsTrigger>
        </TabsList>

        <TabsContent value="conditions">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Patient Conditions</h3>
            <Button className="gap-1" size="sm" variant="outline">
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
              Add Condition
            </Button>
          </div>

          {medicalConditions.length > 0 ? (
            <div className="overflow-hidden rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-2 text-left font-medium">Condition</th>
                    <th className="p-2 text-left font-medium">Date Recorded</th>
                    <th className="p-2 text-left font-medium">Remarks</th>
                    <th className="p-2 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalConditions.map((condition) => (
                    <tr className="border-t" key={condition.id}>
                      <td className="p-2">{condition.condition}</td>
                      <td className="p-2">{condition.dateRecorded}</td>
                      <td className="p-2">{condition.remarks}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <Button
                            className="h-8 w-8 p-0"
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
            <div className="rounded-md border bg-muted/10 py-8 text-center">
              <p className="text-muted-foreground">
                No medical conditions recorded for this patient.
              </p>
              <Button className="mt-4 gap-1" size="sm" variant="outline">
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
                Add Condition
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="allergies">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Patient Allergies</h3>
            <Button className="gap-1" size="sm" variant="outline">
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
              Add Allergy
            </Button>
          </div>

          {allergies.length > 0 ? (
            <div className="overflow-hidden rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-2 text-left font-medium">Allergy</th>
                    <th className="p-2 text-left font-medium">Severity</th>
                    <th className="p-2 text-left font-medium">Date Recorded</th>
                    <th className="p-2 text-left font-medium">Remarks</th>
                    <th className="p-2 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allergies.map((allergy) => (
                    <tr className="border-t" key={allergy.id}>
                      <td className="p-2">{allergy.allergy}</td>
                      <td className="p-2">
                        <Badge
                          className={
                            allergy.severity === "Severe"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : allergy.severity === "Moderate"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                          }
                        >
                          {allergy.severity}
                        </Badge>
                      </td>
                      <td className="p-2">{allergy.dateRecorded}</td>
                      <td className="p-2">{allergy.remarks}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <Button
                            className="h-8 w-8 p-0"
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
            <div className="rounded-md border bg-muted/10 py-8 text-center">
              <p className="text-muted-foreground">
                No allergies recorded for this patient.
              </p>
              <Button className="mt-4 gap-1" size="sm" variant="outline">
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
                Add Allergy
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
