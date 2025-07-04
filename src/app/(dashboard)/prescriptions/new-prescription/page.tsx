<<<<<<< HEAD
import NewPrescription from "@/components/dashbord/add-prescription";

import React from "react";

const AddPrescription = () => {
  return (
    <div className="w-full  max-w-7xl  mx-auto  px-10 min-h-screen">
       <NewPrescription />
    </div>
  );
};

export default AddPrescription;
=======
'use client';
import { ArrowLeftIcon } from 'lucide-react';
import DateSelectorComponent from '@/components/dashbord/date-selector';
import SelectComponent from '@/components/dashbord/select-component';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NewPrescription() {
  return (
    <>
      <div
        className="mt-6 flex cursor-pointer items-center gap-2"
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-6 w-6 cursor-pointer text-gray-500" />
        <span className="font-semibold text-gray-700 text-lg">Back</span>
      </div>
      <h1 className="font-bold">New Presscription</h1>
      <Card className="mt-7 h-fit w-full p-2">
        <CardHeader>
          <CardTitle>Create a new prescription for patient</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 ">
          <SelectComponent placeholder="Patient's Name" />
          <SelectComponent placeholder="Medification" />
          <label className="text-sm" htmlFor="">
            Dosage
            <Input placeholder="10mg" />
          </label>
          <SelectComponent placeholder="Frequency" />
          <DateSelectorComponent placeholder="Start date" />
          <DateSelectorComponent placeholder="End date (optional)" />
        </CardContent>
        <CardContent>
          <label className=" text-sm" htmlFor="">
            Additional information
            <Textarea
              className="h-32 w-full rounded-md border border-gray-300 p-2"
              placeholder="Write prescription details here..."
            />
          </label>
        </CardContent>
        <CardFooter className="mt-4 flex flex-row justify-end gap-1 border-t-2 p-6">
          <Button className=" bg-gray-300" variant="outline">
            Cancel{' '}
          </Button>
          <Button
            className="hover:bg-emerald-600 hover:text-white"
            variant="outline"
          >
            Save prescriptions
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
