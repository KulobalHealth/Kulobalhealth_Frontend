<<<<<<< HEAD
import appFeatures from "@/../public/appDashboard.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Features() {
  return (
    <section className="px-4">
      <div className="container py-5 mx-auto md:py-1">
        <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:max-w-xl container mx-auto">
            <h2 className="mb-3 text-sm uppercase text-primary-300 font-semibold">
              Our Features
            </h2>
            <h2 className="mb-4 text-4xl font-semibold text-primary-600">
              Fast, secure, and automated medication ordering
            </h2>
            <div className="mb-6 flex flex-col gap-4">
              <p className="mb-0">
                Getting the right medication should be quick, safe, and
                hassle-free. With Kulobal Health, we empower pharmacies with an
                automated ordering system that ensures seamless, error-free
                medication requests whether online or via WhatsApp
              </p>
              <Link href="/login" className="w-fit">
                <Button className="w-fit hover:cursor-pointer">
                  Connect Your Pharmacy
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
                  src={appFeatures}
                  alt="App Features"
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
import Image from 'next/image';
import Link from 'next/link';
import appFeatures from '@/../public/appDashboard.webp';
import { Button } from '../ui/button';

export default function Features() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-5 md:py-1">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-3 font-semibold text-primary-300 text-sm uppercase">
              Our Features
            </h2>
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              Fast, secure, and automated medication ordering
            </h2>
            <div className="mb-6 flex flex-col gap-4">
              <p className="mb-0">
                Getting the right medication should be quick, safe, and
                hassle-free. With Kulobal Health, we empower pharmacies with an
                automated ordering system that ensures seamless, error-free
                medication requests whether online or via WhatsApp
              </p>
              <Link className="w-fit" href="/login">
                <Button className="w-fit hover:cursor-pointer">
                  Connect Your Pharmacy
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
                  alt="App Features"
                  className="rounded"
                  fill
                  objectFit="cover"
                  src={appFeatures}
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
