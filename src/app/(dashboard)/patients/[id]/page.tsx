import { Card, CardContent, CardFooter, CardHeader, } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import {  TestTube, TestTube2 } from 'lucide-react';
import { PlusCircle, AlertTriangle } from "lucide-react";

  
export default function Page() {
  return (
    <div className="mt-10">
      <div className="flex flex-row gap-3 w-full">
        <PatientInfoCard />
        <HealthRecordsCard />
      </div>
      <DdiRiskSummary/>
    </div>
  );
}




const PatientInfoCard = () => {
  return (
    <Card className="w-1/3">
      <CardHeader>
        <h2 className="text-lg font-semibold">Patient Information</h2>
      </CardHeader>

      <CardContent className="border-b pb-4 mb-4">
        <h3 className="text-sm font-medium mb-2">Contact Information</h3>
        <div className="text-sm space-y-1">
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

      <CardContent className='flex flex-col gap-4'>
        <h3 className="text-sm font-medium mb-1">Medical Information</h3>
        <p className="text-xs text-muted-foreground">Medical Conditions:</p>
        <div className="flex gap-2 my-2 flex-wrap">
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
            Hypertension
          </span>
          <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
            Diabetes
          </span>
        </div>

        <p className="text-xs text-muted-foreground">Allergies:</p>
        <div className="flex gap-2 my-2 flex-wrap">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Penicillin
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Sulfa Drugs
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t flex gap-2 ">
        <Button variant="outline" className="w-full text-emerald-700 border-emerald-700 ">
          <TestTube className="w-4 h-4 mr-2" />
          New Prescription
        </Button>
        <Button
          variant="outline"
          className="w-full text-sm flex items-center border-black "
        >
          <TestTube2 className="w-4 h-4" />
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
        <h2 className="text-lg font-semibold">Health Records</h2>
        <p className="text-sm text-muted-foreground">
          View medication history, test results, and visit records
        </p>
      </CardHeader>

      <CardContent>
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-4">
          <button className="flex-1 text-sm font-medium bg-white text-black py-2 rounded-md shadow-sm">
            Medications
          </button>
          <button className="flex-1 text-sm font-medium text-muted-foreground py-2 rounded-md">
            Test Results
          </button>
        </div>

        {/* Medication Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-sm">Current Medications</p>
          <Button variant="outline" className="text-sm flex items-center gap-1">
            <PlusCircle className="w-4 h-4" />
            Add Medication
          </Button>
        </div>

        {/* Medication List */}
        <div className="space-y-3">
          {[
            {
              name: "Lisinopril",
              dose: "10mg, Once daily",
              start: "15 Mar, 2025",
              end: "Ongoing",
            },
            {
              name: "Metformin",
              dose: "500mg, Twice daily",
              start: "2023-02-10",
              end: "Ongoing",
            },
            {
              name: "Aspirin",
              dose: "81mg, Once daily",
              start: "15 Mar, 2025",
              end: "Ongoing",
            },
          ].map((med, idx) => (
            <div
              key={idx}
              className="border p-3 rounded-md flex flex-row items-center justify- h-20 justify-between"
            >
              <div>
                <p className="font-semibold text-sm">{med.name}</p>
                <p className="text-sm text-muted-foreground">{med.dose}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-muted-foreground mt-1">
                  Started: {med.start}
                </p>
                <p className="text-xs text-muted-foreground">End: {med.end}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex items-center text-sm text-red-600 gap-2">
          <AlertTriangle className="w-4 h-4" />
          Potential interaction with Warfarin
        </div>
      </CardFooter>
    </Card>
  );
};


const DdiRiskSummary = () => {
  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <h2 className="text-lg font-semibold">DDI Risk Summary</h2>
        <p className="text-sm text-muted-foreground">
          AI-generated drug interaction analysis and recommendations
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* High Risk Interaction */}
        <div className="border rounded-md p-4 ">
          <div className="flex items-center gap-2 font-medium mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            High Risk Interaction Detected
          </div>
          <p className="text-sm text-black mb-3">
            The combination of Aspirin and Warfarin significantly increases the
            risk of bleeding. Both medications affect blood clotting through
            different mechanisms, and their combined effect can be dangerous.
          </p>
          <p className="text-sm font-medium mb-1">Recommendations:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
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
        <div className="border rounded-md p-4 ">
          <div className="flex items-center gap-2 font-medium mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            Moderate Risk Interaction
          </div>
          <p className="text-sm text-black mb-3">
            Lisinopril (ACE inhibitor) and Metformin (antidiabetic) may
            interact. ACE inhibitors can potentially enhance the blood
            glucose-lowering effect of Metformin, increasing the risk of
            hypoglycemia.
          </p>
          <p className="text-sm font-medium mb-1">Recommendations:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Monitor blood glucose levels more frequently</li>
            <li>Adjust Metformin dosage if necessary</li>
            <li>Educate patient about hypoglycemia symptoms and management</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};


