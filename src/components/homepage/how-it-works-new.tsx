import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const steps = [
  {
    number: "01",
    title: "Suppliers List Inventory",
    description:
      "Suppliers upload their products to our comprehensive marketplace platform with detailed specifications and pricing.",
  },
  {
    number: "02",
    title: "Pharmacies Browse & Order",
    description:
      "Pharmacies easily search, compare, and order the products they need through our user-friendly interface.",
  },
  {
    number: "03",
    title: "AI-Powered Insights",
    description:
      "Our AI provides smart recommendations and market insights for better purchasing decisions.",
  },
  {
    number: "04",
    title: "Fast & Reliable Delivery",
    description:
      "Get your orders delivered within 48 hours with our dependable logistics network.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{ width: "100%", height: "0", paddingBottom: "95.25%" }}
              >
                <Image
                  alt="How It Works Process"
                  className="rounded-lg"
                  fill
                  objectFit="cover"
                  src="/images/stock.df9ca4ce2179.webp"
                />
              </figure>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              How It Works
            </h2>
            <p className="mb-6 text-gray-600">
              Our platform simplifies the entire supply chain process from
              listing to delivery
            </p>
            <div className="mb-6 flex flex-col gap-4">
              <ul className="mt-4 space-y-4">
                {steps.map((step, index) => (
                  <li className="flex items-start" key={index}>
                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600">
                      <span className="font-semibold text-sm text-white">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/marketplace">
                <Button className="w-fit hover:cursor-pointer">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
