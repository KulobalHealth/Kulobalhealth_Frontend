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
