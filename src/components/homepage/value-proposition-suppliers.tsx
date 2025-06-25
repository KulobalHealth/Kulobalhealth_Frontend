import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import devicesImg from '@/../public/grow-supply.webp';
import { Button } from '@/components/ui/button';
import { benefits } from './data';

export default function ValuePropositionSuppliers() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{ width: '100%', height: '0', paddingBottom: '95.25%' }}
              >
                {' '}
                <Image
                  alt="Medical Supplies for Suppliers"
                  className="rounded-[7px]"
                  fill
                  objectFit="cover"
                  src={devicesImg}
                />
              </figure>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              Grow Your Supply Business with Kulobal Health
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Join our platform and connect with pharmacies that need your
              products. Scale your business with our powerful tools and network.
            </p>
            <div className="mb-6 flex flex-col gap-10">
              <ul className="mt-4 space-y-4 ">
                {benefits.map((benefit) => (
                  <li className="flex items-start" key={benefit.id}>
                    <div className="flex-shrink-0">
                      <div className="mt-1 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/suppliers">
                <Button className="w-fit py-6 hover:cursor-pointer">
                  Become a Supplier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
