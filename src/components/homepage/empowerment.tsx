import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import nurseImg from '@/../public/nurse.webp';
import { Button } from '../ui/button';

const features = [
  'Reliable Access to Rapid Test Kits',
  'Scalable and Sustainable Healthcare Solution',
  'AI-Powered Inventory & Test Management',
];

export default function Empowerment() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-5 md:py-1">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: '100%', height: '0', paddingBottom: '90.25%' }}
              >
                <Image
                  alt="Empowering Healthcare Providers"
                  className="rounded"
                  fill
                  objectFit="contain"
                  src={nurseImg}
                />
              </figure>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              Health Technology Offering
            </h2>
            <div className="mb-6 flex flex-col gap-5">
              <span>
                <p className="mb-0">
                  Kulobal Health provides a digital health platform designed to
                  improve access to rapid diagnostic test (RDT) kits, optimize
                  pharmacy operations, and enhance patient care.
                </p>
                <ul className="mt-4 space-y-3">
                  {features.map((feature) => (
                    <li className="flex items-center" key={feature}>
                      <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </span>

              <Link className="w-fit" href="/login">
                <Button className="w-fit hover:cursor-pointer">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
