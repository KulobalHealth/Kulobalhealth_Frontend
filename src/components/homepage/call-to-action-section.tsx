import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homeImg from "@/../public/appDashboard.webp";
import { Button } from "@/components/ui/button";
import { ctaPoints } from "./data";

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-[#03C486] to-[#02b377] px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{ width: "100%", height: "0", paddingBottom: "95.25%" }}
              >
                {" "}
                <Image
                  alt="Healthcare Professionals Ready to Transform"
                  className="rounded-lg"
                  fill
                  objectFit="cover"
                  src={homeImg}
                />
              </figure>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-white">
              Ready to Transform Your Healthcare Supply Chain?
            </h2>
            <p className="mb-6 text-green-100 text-lg">
              Join thousands of pharmacies and suppliers who are already
              revolutionizing their business with Kulobal Health
            </p>
            <div className="mb-6 flex flex-col gap-4">
              <ul className="mt-4 space-y-3">
                {ctaPoints.map((point) => (
                  <li className="flex items-start" key={point.id}>
                    <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
                      <Check className="h-3 w-3 text-[#03C486]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {point.title}
                      </h4>
                      <p className="text-green-100 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <Link className="flex-1" href="/pharmacies">
                  <Button className="w-full bg-white font-semibold text-[#03C486] transition-colors hover:bg-gray-100">
                    Shop as a Pharmacy
                  </Button>
                </Link>
                <Link className="flex-1" href="/suppliers">
                  <Button className="w-full border border-white/30 bg-white/20 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                    Partner as a Supplier
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
