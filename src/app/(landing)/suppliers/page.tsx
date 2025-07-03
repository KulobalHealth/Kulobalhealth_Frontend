import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import homeImg from '@/../public/appDashboard.webp';
import nurseImg from '@/../public/nurse.webp';
import { Button } from '@/components/ui/button';
import { benefits, features, steps, testimonials } from './data';

export default function SuppliersPage() {
  return (
    <div>
      <section className="px-4">
        <div className="container mx-auto py-20">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="container mx-auto lg:max-w-xl">
              <h1 className="mb-4 font-bold text-5xl text-primary-600 dark:text-primary-400">
                Connect Directly with Pharmacies Across Ghana
              </h1>
              <p className="mb-6 text-gray-600 text-lg dark:text-gray-300">
                Showcase your inventory on our dedicated platform, gain valuable
                market insights, and streamline your distribution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/signup">
                  <Button className="rounded-lg bg-primary-600 px-8 py-3 text-white transition-colors hover:bg-primary-700">
                    Register Your Company
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    className="rounded-lg border-primary-600 px-8 py-3 text-primary-600 transition-colors hover:bg-primary-50"
                    variant="outline"
                  >
                    Learn More
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
                  {' '}
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
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              How It Works for Suppliers
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Simple steps to start selling to pharmacies across Ghana
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
                    alt="Healthcare Supply Chain"
                    className="rounded-[7px]"
                    fill
                    objectFit="contain"
                    src={nurseImg}
                  />
                </figure>
              </div>
            </div>
            <div className="container mx-auto lg:max-w-xl">
              <h2 className="mb-4 font-semibold text-4xl text-primary-600 dark:text-primary-400">
                Benefits of Partnering with Kulobal Health
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Join our network of trusted suppliers and grow your business
                with advanced technology and market insights
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

      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              Our Technology Platform Features
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Advanced tools designed to help suppliers succeed on our platform
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
                  key={feature.id}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800 text-lg dark:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              What Suppliers Say About Us
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Join successful suppliers who are growing their business with
              Kulobal Health
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
                    <div className="h-4 w-4 text-yellow-400" key={i}>
                      ★
                    </div>
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

      <section className="bg-primary-600 px-4">
        <div className="container mx-auto py-16 text-center">
          <h2 className="mb-4 font-bold text-4xl text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            Join our network of successful suppliers and start reaching more
            pharmacies today
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-50">
                Partner with Us to Grow Your Business
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="rounded-lg border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-primary-600"
                variant="outline"
              >
                Contact Partnership Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
