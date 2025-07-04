import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  "Extensive Marketplace - Wide range of products including rapid test kits, first aid supplies, and medical devices",
  "Compare & Choose - Filter by price, manufacturer, brand, and other criteria to find exactly what you need",
  "Simplified Ordering - No more dealing with multiple suppliers daily. One platform for all your needs",
  "Reliable Delivery - Get your orders delivered within 48 hours with our dependable logistics network",
];

export default function ValuePropositionPharmacies() {
  return (
    <section className="bg-gray-50 px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              Everything Your Pharmacy Needs, All in One Place
            </h2>
            <p className="mb-6 text-gray-600">
              Streamline your procurement process with our comprehensive
              marketplace designed specifically for pharmacies
            </p>
            <div className="mb-6 flex flex-col gap-4">
              <ul className="mt-4 space-y-3">
                {benefits.map((benefit, index) => (
                  <li className="flex items-start" key={index}>
                    <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/marketplace">
                <Button className="w-fit hover:cursor-pointer">
                  Explore the Marketplace
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{ width: "100%", height: "0", paddingBottom: "95.25%" }}
              >
                <Image
                  alt="Pharmacy Marketplace"
                  className="rounded-lg"
                  fill
                  objectFit="cover"
                  src="/images/pharmaImage.webp"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
