'use client';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePatientsStore } from '@/store/patients';

interface PatientDetailPageProps {
  readonly patientId: string;
  readonly onBack: () => void;
}

export default function PatientDetailPage({
  patientId,
  onBack,
}: PatientDetailPageProps) {
  const { getPatientById } = usePatientsStore();
  const patient = getPatientById(patientId);

  if (!patient) {
    return (
      <div className="min-h-screen p-6">
        <div className="mb-6 flex items-center gap-4">
          <Button onClick={onBack} size="sm" variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="font-bold text-2xl">Patient Not Found</h1>
        </div>
        <p className="text-gray-600">
          The requested patient could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6 flex items-center gap-4">
        <Button onClick={onBack} size="sm" variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="flex items-center gap-3">
          {patient.avatar && (
            <Image
              alt={patient.name}
              className="rounded-full"
              height={40}
              src={patient.avatar}
              width={40}
            />
          )}
          <h1 className="font-bold text-2xl">{patient.name}</h1>
          <Badge variant="secondary">{patient.gender}</Badge>
          <Badge variant="secondary">{patient.age} years</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-3 font-medium">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span>{patient.contact}</span>
                </div>
                {patient.email && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span>{patient.email}</span>
                  </div>
                )}
                {patient.address && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span>{patient.address}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Associated Pharmacy:</span>
                  <span>{patient.pharmacy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Visit:</span>
                  <span>{patient.lastVisit}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium">Medical Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm">
                    Medical Conditions:
                  </span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {patient.medicalConditions.length > 0 ? (
                      patient.medicalConditions.map((condition) => {
                        let severityClass =
                          'border-green-300 text-green-700 bg-green-50';
                        if (condition.severity === 'High') {
                          severityClass =
                            'border-red-300 text-red-700 bg-red-50';
                        } else if (condition.severity === 'Moderate') {
                          severityClass =
                            'border-yellow-300 text-yellow-700 bg-yellow-50';
                        }

                        return (
                          <Badge
                            className={severityClass}
                            key={condition.id}
                            variant="outline"
                          >
                            {condition.name}
                          </Badge>
                        );
                      })
                    ) : (
                      <span className="text-gray-500 text-sm">
                        None recorded
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Allergies:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {patient.allergies.length > 0 ? (
                      patient.allergies.map((allergy) => {
                        let severityClass = 'bg-yellow-600 hover:bg-yellow-700';
                        if (allergy.severity === 'Severe') {
                          severityClass = 'bg-red-600 hover:bg-red-700';
                        } else if (allergy.severity === 'Moderate') {
                          severityClass = 'bg-orange-600 hover:bg-orange-700';
                        }

                        return (
                          <Badge
                            className={severityClass}
                            key={allergy.id}
                            variant="destructive"
                          >
                            {allergy.name}
                          </Badge>
                        );
                      })
                    ) : (
                      <span className="text-gray-500 text-sm">
                        None recorded
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Records</CardTitle>
            <p className="text-gray-600 text-sm">
              View medication history, test results, and visit records
            </p>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="medications">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="medications">Medications</TabsTrigger>
                <TabsTrigger value="test-results">Test Results</TabsTrigger>
              </TabsList>

              <TabsContent className="mt-4 space-y-4" value="medications">
                {patient.medications.length > 0 ? (
                  <div className="space-y-3">
                    {patient.medications.map((medication) => (
                      <div
                        className="flex items-start justify-between rounded-lg border p-3"
                        key={medication.id}
                      >
                        <div>
                          <h4 className="font-medium">{medication.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {medication.dosage}, {medication.frequency}
                          </p>
                        </div>
                        <div className="text-right text-sm">
                          <div>Started: {medication.startDate}</div>
                          <div className="text-gray-600">
                            End: {medication.endDate}
                          </div>
                          <Badge
                            className="mt-1"
                            variant={
                              medication.status === 'Ongoing'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {medication.status}
                          </Badge>
                        </div>
                      </div>
                    ))}

                    {patient.ddiRisks.length > 0 &&
                      patient.ddiRisks
                        .filter(
                          (risk) =>
                            risk.severity === 'High' ||
                            risk.severity === 'Moderate'
                        )
                        .map((risk) => (
                          <div
                            className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 p-3"
                            key={risk.id}
                          >
                            <AlertTriangle className="h-4 w-4 flex-shrink-0 text-orange-600" />
                            <span className="text-orange-700 text-sm">
                              Potential interaction: {risk.drugs.join(' + ')}
                            </span>
                          </div>
                        ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm">
                    No medications recorded
                  </p>
                )}
              </TabsContent>

              <TabsContent className="mt-4" value="test-results">
                <p className="text-gray-600 text-sm">
                  No test results available
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* DDI Risk Summary */}
      {patient.ddiRisks.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>DDI Risk Summary</CardTitle>
            <p className="text-gray-600 text-sm">
              AI-generated drug interaction analysis and recommendations
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {patient.ddiRisks.map((risk) => {
              let borderClass = 'border-blue-200 bg-blue-50';
              let iconClass = 'text-blue-600';
              let titleClass = 'text-blue-800';

              if (risk.severity === 'High') {
                borderClass = 'border-red-200 bg-red-50';
                iconClass = 'text-red-600';
                titleClass = 'text-red-800';
              } else if (risk.severity === 'Moderate') {
                borderClass = 'border-yellow-200 bg-yellow-50';
                iconClass = 'text-yellow-600';
                titleClass = 'text-yellow-800';
              }

              return (
                <div
                  className={`rounded-lg border p-4 ${borderClass}`}
                  key={risk.id}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className={`h-5 w-5 ${iconClass}`} />
                    <h3 className={`font-medium ${titleClass}`}>
                      {risk.severity} Risk Interaction
                      {risk.severity === 'High' ? ' Detected' : ''}
                    </h3>
                  </div>
                  <p className="mb-3 text-gray-700 text-sm">
                    {risk.description}
                  </p>
                  <div>
                    <h4 className="mb-2 font-medium text-sm">
                      Recommendations:
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-gray-700 text-sm">
                      {risk.recommendations.map((recommendation) => (
                        <li
                          key={`${risk.id}-${recommendation.substring(0, 20)}`}
                        >
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
