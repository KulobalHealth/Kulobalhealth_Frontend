import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import allKitsImg from "@/../public/allKits.webp";
import pharmaImg from "@/../public/pharmacyPage.webp";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { benefits, categories, steps, testimonials } from "./data";

export default function PharmaciesPage() {
  return (
    <div>
      {" "}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Icons.Banner className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="container relative mx-auto py-20">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="container mx-auto lg:max-w-xl">
              <h1 className="mb-4 font-bold text-5xl text-primary-600 dark:text-primary-400">
                Source All Your Medical Supplies, Effortlessly
              </h1>
              <p className="mb-6 text-gray-600 text-lg dark:text-gray-300">
                Access a vast online marketplace with competitive pricing,
                diverse brands, and guaranteed 48-hour delivery.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/marketplace">
                  <Button className="rounded-lg bg-primary-600 px-8 py-3 text-white transition-colors hover:bg-primary-700">
                    Browse Products
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    className="rounded-lg border-primary-600 px-8 py-3 text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
                    variant="outline"
                  >
                    Create Your Pharmacy Account
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
                  <Image
                    alt="Pharmacy Supplies"
                    className="rounded-[7px]"
                    fill
                    objectFit="cover"
                    src={pharmaImg}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 dark:bg-background">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              How It Works for Pharmacies
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Simple steps to get all your medical supplies delivered to your
              pharmacy
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
                key={step.id}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 dark:bg-primary-500">
                  <span className="font-semibold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-gray-800 text-lg dark:text-gray-100">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
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
                  <Image
                    alt="Medical Supplies Benefits"
                    className="rounded-[7px]"
                    fill
                    objectFit="cover"
                    src={allKitsImg}
                  />
                </figure>
              </div>
            </div>
            <div className="container mx-auto lg:max-w-xl">
              <h2 className="mb-4 font-semibold text-4xl text-primary-600 dark:text-primary-400">
                Benefits for Your Pharmacy
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Transform your procurement process with our comprehensive
                platform designed specifically for pharmacies
              </p>
              <div className="mb-6 flex flex-col gap-4">
                <ul className="mt-4 space-y-3">
                  {benefits.map((benefit) => (
                    <li className="flex items-start" key={benefit.id}>
                      <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 dark:bg-primary-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm dark:text-gray-300">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 dark:bg-background">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              Explore Product Categories
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Discover our comprehensive range of medical products and supplies
            </p>
          </div>
          <div className="mx-auto mb-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                className="block h-full"
                href="/marketplace"
                key={category.id}
              >
                <div className="flex h-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                  <h3 className="mb-2 font-semibold text-gray-800 text-lg dark:text-gray-100">
                    {category.name}
                  </h3>
                  <p className="flex-grow text-gray-600 text-sm dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/marketplace">
              <Button className="rounded-lg bg-primary-600 px-8 py-3 text-white transition-colors hover:bg-primary-700">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              What Pharmacies Say About Us
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Join hundreds of pharmacies who trust Kulobal Health for their
              supply needs
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                key={testimonial.id}
              >
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      className="h-4 w-4 fill-current text-yellow-400"
                      key={i}
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-700 italic dark:text-gray-300">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="font-medium text-primary-600 text-sm dark:text-primary-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary-600 px-4">
        <div className="container mx-auto py-16 text-center">
          <h2 className="mb-4 font-bold text-4xl text-white">
            Ready to Simplify Your Procurement?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            Join thousands of pharmacies already using Kulobal Health to
            streamline their supply chain
          </p>
          <Link href="/signup">
            <Button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-50">
              Sign Up Today and Simplify Your Procurement
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
