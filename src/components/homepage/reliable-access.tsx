import reliableAccessImg from "@/../public/allKits.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ReliableAccess() {
  return (
    <section className="px-4">
      <div className="container py-5 mx-auto md:py-1">
        <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: "100%", height: "0", paddingBottom: "95.25%" }}
              >
                <Image
                  src={reliableAccessImg}
                  alt="Reliable Access"
                  fill
                  objectFit="cover"
                  className="rounded"
                />
              </figure>
            </div>
          </div>
          <div className="lg:max-w-xl container mx-auto">
            <h2 className="mb-4 text-4xl font-semibold text-primary-600">
              Reliable Access to RDT&apos;s
            </h2>
            <div className="mb-6 flex gap-4 flex-col">
              <p className="mb-0">
                Get high-quality rapid test kits for your pharmacy with flexible
                payment options. Order online no need to call suppliers—and
                receive delivery within 48 hours.
              </p>
              <Link href="/login" className="w-fit ">
                <Button className="w-fit hover:cursor-pointer">
                  Order Test Kits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
