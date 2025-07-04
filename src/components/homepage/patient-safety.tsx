<<<<<<< HEAD
import patientSafetyImg from "@/../public/patientSafety.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const hospitalFeatures = [
  "Comprehensive patient tracking and electronic health records",
  "Advanced analytics for population health management",
  "Integrated laboratory and diagnostic result management",
  "Multi-department coordination and resource optimization",
];

export default function HospitalsHealthCenters() {
  return (
    <section className="px-4">
      <div className="container py-5 mx-auto md:py-1">
        <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:max-w-xl container mx-auto">
            {" "}
            <h2 className="mb-4 text-4xl font-semibold text-primary-600">
              For Hospitals & Health Centers
            </h2>
            <div className="mb-6 flex flex-col gap-4">
              <ul className="mt-4 space-y-3">
                {hospitalFeatures.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="flex justify-center items-center bg-primary-600 w-5 h-5 rounded-full mr-2">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login" className="w-fit">
                <Button className="w-fit hover:cursor-pointer">
                  Optimize Your Health Center
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: "100%", height: "0", paddingBottom: "90.25%" }}
              >
                <Image
                  src={patientSafetyImg}
                  alt="Hospitals and Health Centers"
                  fill
                  objectFit="cover"
                  className="rounded"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import patientSafetyImg from '@/../public/patientSafety.webp';
import { Button } from '../ui/button';

const hospitalFeatures = [
  'Comprehensive patient tracking and electronic health records',
  'Advanced analytics for population health management',
  'Integrated laboratory and diagnostic result management',
  'Multi-department coordination and resource optimization',
];

export default function HospitalsHealthCenters() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-5 md:py-1">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="container mx-auto lg:max-w-xl">
            {' '}
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              For Hospitals & Health Centers
            </h2>
            <div className="mb-6 flex flex-col gap-4">
              <ul className="mt-4 space-y-3">
                {hospitalFeatures.map((feature) => (
                  <li className="flex items-center" key={feature}>
                    <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/login">
                <Button className="w-fit hover:cursor-pointer">
                  Optimize Your Health Center
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: '100%', height: '0', paddingBottom: '90.25%' }}
              >
                <Image
                  alt="Hospitals and Health Centers"
                  className="rounded"
                  fill
                  objectFit="cover"
                  src={patientSafetyImg}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
