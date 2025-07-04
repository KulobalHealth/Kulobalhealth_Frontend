<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import allKitsImg from "@/../public/allKits.webp";
import pharmaImg from "@/../public/pharmacyPage.webp";
import { steps, benefits, categories, testimonials } from "./data";
import { Icons } from "@/components/ui/icons";

export default function PharmaciesPage() {
  return (
    <div>
      {" "}
      <section className="min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Icons.Banner className="w-full h-full opacity-20 object-cover" />
        </div>
        <div className="container py-20 mx-auto relative">
          <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
            <div className="lg:max-w-xl container mx-auto">
              <h1 className="mb-4 text-5xl font-bold text-primary-600 dark:text-primary-400">
                Source All Your Medical Supplies, Effortlessly
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Access a vast online marketplace with competitive pricing,
                diverse brands, and guaranteed 48-hour delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace">
                  <Button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Browse Products
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="outline"
                    className="px-8 py-3 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
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
                    src={pharmaImg}
                    alt="Pharmacy Supplies"
                    fill
                    objectFit="cover"
                    className="rounded-[7px]"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 bg-white dark:bg-background">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How It Works for Pharmacies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple steps to get all your medical supplies delivered to your
              pharmacy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.id}
                className="text-center p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"
              >
                <div className="flex justify-center items-center bg-primary-600 dark:bg-primary-500 w-12 h-12 rounded-full mx-auto mb-4">
                  <span className="text-white font-semibold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="container py-16 mx-auto">
          <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
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
                    src={allKitsImg}
                    alt="Medical Supplies Benefits"
                    fill
                    objectFit="cover"
                    className="rounded-[7px]"
                  />
                </figure>
              </div>
            </div>
            <div className="lg:max-w-xl container mx-auto">
              <h2 className="mb-4 text-4xl font-semibold text-primary-600 dark:text-primary-400">
                Benefits for Your Pharmacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transform your procurement process with our comprehensive
                platform designed specifically for pharmacies
              </p>
              <div className="mb-6 flex gap-4 flex-col">
                <ul className="mt-4 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit.id} className="flex items-start">
                      <div className="flex justify-center items-center bg-primary-600 dark:bg-primary-500 w-5 h-5 rounded-full mr-3 flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
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
      <section className="px-4 bg-white dark:bg-background">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Explore Product Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of medical products and supplies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                href="/marketplace"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/marketplace">
              <Button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              What Pharmacies Say About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join hundreds of pharmacies who trust Kulobal Health for their
              supply needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-800"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-4 bg-primary-600">
        <div className="container py-16 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Procurement?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of pharmacies already using Kulobal Health to
            streamline their supply chain
          </p>
          <Link href="/signup">
            <Button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Sign Up Today and Simplify Your Procurement
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
=======
import { Check, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import allKitsImg from '@/../public/allKits.webp';
import pharmaImg from '@/../public/pharmacyPage.webp';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { benefits, categories, steps, testimonials } from './data';

export default function PharmaciesPage() {
  return (
    <div>
      {' '}
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
                    width: '100%',
                    height: '0',
                    paddingBottom: '95.25%',
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
                    width: '100%',
                    height: '0',
                    paddingBottom: '95.25%',
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
