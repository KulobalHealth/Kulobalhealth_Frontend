import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import allKitsImg from "@/../public/allKits.webp";
import { Button } from "@/components/ui/button";

const categories = [
  "Medications - Wide range of pharmaceutical products with 500+ options available",
  "Rapid Test Kits - COVID-19, Malaria, HIV tests and more with 150+ testing solutions",
  "Medical Devices - Blood pressure monitors, thermometers and 200+ medical instruments",
  "First Aid Supplies - Bandages, antiseptics, emergency kits and 300+ safety items",
  "Personal Care - Health and wellness products with 400+ personal care options",
  "Diagnostic Tools - Essential diagnostic equipment with 100+ professional tools",
];

export default function FeaturedCategories() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600 dark:text-primary-400">
              Featured Product Categories
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Discover our comprehensive range of medical products and supplies,
              carefully curated for pharmacies and healthcare providers
            </p>
            <div className="mb-6 flex flex-col gap-10">
              <ul className="mt-4 space-y-3">
                {categories.map((category, index) => (
                  <li className="flex items-start" key={`category-${index}`}>
                    <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 dark:bg-primary-500">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/marketplace">
                <Button className="w-fit py-6 hover:cursor-pointer">
                  Browse All Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{
                  width: "100%",
                  height: "0",
                  paddingBottom: "95.25%",
                }}
              >
                {" "}
                <Image
                  alt="Featured Product Categories"
                  className="rounded-[7px]"
                  fill
                  objectFit="cover"
                  src={allKitsImg}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
