<<<<<<< HEAD
"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box } from "lucide-react";
import { patients } from "@/lib/data";
import { MedicalHistory } from "@/components/patient/medical-history";
import { PatientMedications } from "@/components/patient/medications";
import { TestHistory } from "@/components/patient/test-history";
import { PatientVitals } from "@/components/patient/vitals";

export default function PatientDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const patient = patients.find((patient) => patient.id === Number(id));

  if (!patient) {
    notFound();
  }

  return (
    <section className="py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href="/patients"
                className="text-muted-foreground hover:underline"
              >
                Patients
              </Link>
              <span className="text-muted-foreground">/</span>
              <span>Patient details</span>
            </div>
            <h1 className="text-2xl font-bold">{patient?.name}</h1>
          </div>
          <Button variant="destructive">Delete customer</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medical-history">
                  Medical History
                </TabsTrigger>
                <TabsTrigger value="medications">Medications</TabsTrigger>
                <TabsTrigger value="test-history">Test History</TabsTrigger>
                <TabsTrigger value="vitals">Vitals</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="border rounded-md p-6">
                <div>
                  <h2 className="text-lg font-medium mb-4">
                    Patient Current activities.
                  </h2>
                  <Tabs defaultValue="this-week" className="mb-4">
                    <TabsList>
                      <TabsTrigger value="this-week">This week</TabsTrigger>
                      <TabsTrigger value="next-week">Next week</TabsTrigger>
                    </TabsList>

                    <TabsContent value="this-week">
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="w-24 h-24 mb-4">
                          <Box className="w-full h-full text-orange-400" />
                        </div>
                        <h3 className="text-lg font-medium">No Data Added</h3>
                        <p className="text-muted-foreground">
                          There is no data available for this week.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="next-week">
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="w-24 h-24 mb-4">
                          <Box className="w-full h-full text-orange-400" />
                        </div>
                        <h3 className="text-lg font-medium">No Data Added</h3>
                        <p className="text-muted-foreground">
                          There is no data available for next week.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="medical-history">
                <MedicalHistory
                  medicalConditions={patient.medicalConditions || []}
                  allergies={patient.allergies || []}
                />
              </TabsContent>

              <TabsContent value="medications">
                <PatientMedications medications={patient.medications || []} />
              </TabsContent>

              <TabsContent value="test-history">
                <TestHistory testHistory={patient.testHistory || []} />
              </TabsContent>

              <TabsContent value="vitals">
                <PatientVitals vitalSigns={patient.vitalSigns || []} />
              </TabsContent>

              <TabsContent value="actions">
                <div className="border rounded-md p-6">
                  <p>Actions content will appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact info</CardTitle>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-pink-100 text-pink-800 hover:bg-pink-100"
                  >
                    {patient.id}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">First name</div>
                    <div className="text-right">{patient.name}</div>
                  </div>

                  {/* <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Last name</div>
                    <div className="text-right">{patient.lastName}</div>
                  </div> */}

                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Telephone</div>
                    <div className="text-right">{patient.telephone}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Gender</div>
                    <div className="text-right">{patient.gender}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Date of Birth</div>
                    <div className="text-right">{patient.dateOfBirth}</div>
                  </div>

                  {/* <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Age</div>
                    <div className="text-right text-pink-500">
                      {patient.age}
                    </div>
                  </div> */}

                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Location</div>
                    <div className="text-right">{patient.location}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">
                    Vitals Signs{" "}
                    <span className="text-green-500 text-sm float-right">
                      view
                    </span>
                  </h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">
                        Blood Pressure
                      </div>
                      <div className="text-right text-blue-500">
                        {patient.vitalSigns && patient.vitalSigns.length > 0
                          ? patient.vitalSigns[0].bloodPressure || "0/0"
                          : "0/0"}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Blood Sugar</div>
                      <div className="text-right">
                        {patient.vitalSigns && patient.vitalSigns.length > 0
                          ? patient.vitalSigns[0].bloodSugar || "0"
                          : "0"}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Weight</div>
                      <div className="text-right">
                        {patient.vitalSigns && patient.vitalSigns.length > 0
                          ? patient.vitalSigns[0].weight || "0"
                          : "0"}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Height</div>
                      <div className="text-right">
                        {patient.vitalSigns && patient.vitalSigns.length > 0
                          ? patient.vitalSigns[0].height || "0"
                          : "0"}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">BMI</div>
                      <div className="text-right">
                        {patient.vitalSigns && patient.vitalSigns.length > 0
                          ? `${patient.vitalSigns[0].bmi || "0"}kg/m²`
                          : "0kg/m²"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">
                    Current RDT{" "}
                    <span className="text-green-500 text-sm float-right">
                      view
                    </span>
                  </h3>
                  <div className="grid grid-cols-2">
                    <div className="text-muted-foreground">Typhoid</div>
                    <div className="text-right text-green-500">Positive</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import { AlertTriangle, PlusCircle, TestTube, TestTube2 } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export default function Page() {
  return (
    <div className="mt-10">
      <div className="flex w-full flex-row gap-3">
        <PatientInfoCard />
        <HealthRecordsCard />
      </div>
      <DdiRiskSummary />
    </div>
  );
}

const PatientInfoCard = () => {
  return (
    <Card className="w-1/3">
      <CardHeader>
        <h2 className="font-semibold text-lg">Patient Information</h2>
      </CardHeader>

      <CardContent className="mb-4 border-b pb-4">
        <h3 className="mb-2 font-medium text-sm">Contact Information</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Phone:</span>
            <span>+233 540977343</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>johndoe@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Address:</span>
            <span>123 Main Street, Accra, Ghana</span>
          </div>
        </div>
      </CardContent>

      <CardContent className="flex flex-col gap-4">
        <h3 className="mb-1 font-medium text-sm">Medical Information</h3>
        <p className="text-muted-foreground text-xs">Medical Conditions:</p>
        <div className="my-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-200 px-2 py-1 text-gray-800 text-xs">
            Hypertension
          </span>
          <span className="rounded-full bg-gray-200 px-2 py-1 text-gray-800 text-xs">
            Diabetes
          </span>
        </div>

        <p className="text-muted-foreground text-xs">Allergies:</p>
        <div className="my-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-red-500 px-2 py-1 text-white text-xs">
            Penicillin
          </span>
          <span className="rounded-full bg-red-500 px-2 py-1 text-white text-xs">
            Sulfa Drugs
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 border-t pt-4 ">
        <Button
          className="w-full border-emerald-700 text-emerald-700 "
          variant="outline"
        >
          <TestTube className="mr-2 h-4 w-4" />
          New Prescription
        </Button>
        <Button
          className="flex w-full items-center border-black text-sm "
          variant="outline"
        >
          <TestTube2 className="h-4 w-4" />
          New Rapid Test
        </Button>
      </CardFooter>
    </Card>
  );
};

const HealthRecordsCard = () => {
  return (
    <Card className="w-2/3">
      <CardHeader>
        <h2 className="font-semibold text-lg">Health Records</h2>
        <p className="text-muted-foreground text-sm">
          View medication history, test results, and visit records
        </p>
      </CardHeader>

      <CardContent>
        {/* Tabs */}
        <div className="mb-4 flex gap-1 rounded-lg bg-gray-100 p-1">
          <button className="flex-1 rounded-md bg-white py-2 font-medium text-black text-sm shadow-sm">
            Medications
          </button>
          <button className="flex-1 rounded-md py-2 font-medium text-muted-foreground text-sm">
            Test Results
          </button>
        </div>

        {/* Medication Header */}
        <div className="mb-4 flex items-center justify-between">
          <p className="font-medium text-sm">Current Medications</p>
          <Button className="flex items-center gap-1 text-sm" variant="outline">
            <PlusCircle className="h-4 w-4" />
            Add Medication
          </Button>
        </div>

        {/* Medication List */}
        <div className="space-y-3">
          {[
            {
              name: 'Lisinopril',
              dose: '10mg, Once daily',
              start: '15 Mar, 2025',
              end: 'Ongoing',
            },
            {
              name: 'Metformin',
              dose: '500mg, Twice daily',
              start: '2023-02-10',
              end: 'Ongoing',
            },
            {
              name: 'Aspirin',
              dose: '81mg, Once daily',
              start: '15 Mar, 2025',
              end: 'Ongoing',
            },
          ].map((med, idx) => (
            <div
              className="justify- flex h-20 flex-row items-center justify-between rounded-md border p-3"
              key={idx}
            >
              <div>
                <p className="font-semibold text-sm">{med.name}</p>
                <p className="text-muted-foreground text-sm">{med.dose}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="mt-1 text-muted-foreground text-xs">
                  Started: {med.start}
                </p>
                <p className="text-muted-foreground text-xs">End: {med.end}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertTriangle className="h-4 w-4" />
          Potential interaction with Warfarin
        </div>
      </CardFooter>
    </Card>
  );
};

const DdiRiskSummary = () => {
  return (
    <Card className="mt-6 w-full">
      <CardHeader>
        <h2 className="font-semibold text-lg">DDI Risk Summary</h2>
        <p className="text-muted-foreground text-sm">
          AI-generated drug interaction analysis and recommendations
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* High Risk Interaction */}
        <div className="rounded-md border p-4 ">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            High Risk Interaction Detected
          </div>
          <p className="mb-3 text-black text-sm">
            The combination of Aspirin and Warfarin significantly increases the
            risk of bleeding. Both medications affect blood clotting through
            different mechanisms, and their combined effect can be dangerous.
          </p>
          <p className="mb-1 font-medium text-sm">Recommendations:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground text-sm">
            <li>
              Consider alternative to Aspirin such as Acetaminophen for pain
              relief
            </li>
            <li>
              If both medications are necessary, reduce Warfarin dosage and
              monitor INR closely
            </li>
            <li>
              Educate patient about bleeding risk signs and when to seek medical
              attention
            </li>
            <li>
              Schedule more frequent follow-ups to monitor for adverse effects
            </li>
          </ul>
        </div>

        {/* Moderate Risk Interaction */}
        <div className="rounded-md border p-4 ">
          <div className="mb-2 flex items-center gap-2 font-medium">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            Moderate Risk Interaction
          </div>
          <p className="mb-3 text-black text-sm">
            Lisinopril (ACE inhibitor) and Metformin (antidiabetic) may
            interact. ACE inhibitors can potentially enhance the blood
            glucose-lowering effect of Metformin, increasing the risk of
            hypoglycemia.
          </p>
          <p className="mb-1 font-medium text-sm">Recommendations:</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground text-sm">
            <li>Monitor blood glucose levels more frequently</li>
            <li>Adjust Metformin dosage if necessary</li>
            <li>Educate patient about hypoglycemia symptoms and management</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
