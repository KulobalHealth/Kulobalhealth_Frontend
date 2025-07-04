import { Lightbulb, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import nurseImg from "@/../public/nurse.webp";
import patientSafetyImg from "@/../public/patientSafety.webp";
import { Button } from "@/components/ui/button";
import { challenges, values, whyChooseUs } from "./data";

export default function AboutUsPage() {
  return (
    <div>
      <section className="px-4">
        <div className="container mx-auto py-20">
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="container mx-auto lg:max-w-xl">
              <h1 className="mb-4 font-bold text-5xl text-primary-600">
                Transforming Healthcare Supply Chains in Ghana
              </h1>
              <p className="mb-6 text-gray-600 text-lg dark:text-white">
                We&apos;re on a mission to revolutionize how medical supplies
                reach pharmacies, ensuring every Ghanaian has access to quality
                healthcare products when they need them most.
              </p>
              <Link href="/contact">
                <Button className="rounded-lg bg-primary-600 px-8 py-3 text-white transition-colors hover:bg-primary-700">
                  Get in Touch
                </Button>
              </Link>
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
                    alt="Healthcare Professional"
                    className="rounded-lg"
                    fill
                    objectFit="contain"
                    src={nurseImg}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 ">
        <div className="container mx-auto py-16">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div className="text-center">
              <Target className="mx-auto mb-6 h-16 w-16 text-primary-600" />
              <h2 className="mb-4 font-bold text-3xl text-gray-800 dark:text-primary-600">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed dark:text-white">
                To democratize access to medical supplies across Ghana by
                creating a seamless, AI-powered marketplace that connects
                pharmacies with reliable suppliers, ensuring quality healthcare
                products reach every community within 48 hours.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="mx-auto mb-6 h-16 w-16 text-primary-600" />
              <h2 className="mb-4 font-bold text-3xl text-gray-800 dark:text-primary-600">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed dark:text-white">
                To become the leading healthcare supply chain platform in West
                Africa, empowering pharmacies and suppliers with innovative
                technology while ultimately improving health outcomes for
                millions of people.
              </p>
            </div>
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
                    alt="Healthcare Challenges"
                    className="rounded-lg"
                    fill
                    objectFit="cover"
                    src={patientSafetyImg}
                  />
                </figure>
              </div>
            </div>
            <div className="container mx-auto lg:max-w-xl">
              <h2 className="mb-4 font-semibold text-4xl text-primary-600">
                The Problem We Solve
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="dark:text-white">
                  Ghana&apos;s healthcare supply chain faces significant
                  challenges that impact patient care:
                </p>
                <ul className="ml-4 space-y-2">
                  {challenges.map((challenge) => (
                    <li
                      className="flex items-start space-x-2"
                      key={challenge.id}
                    >
                      <Zap className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                      <span className="dark:text-white">
                        <strong>{challenge.title}:</strong>{" "}
                        {challenge.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="dark:text-white">
                  Kulobal Health addresses these challenges by creating a
                  unified, technology-driven platform that streamlines the
                  entire supply chain from suppliers to pharmacies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 ">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-primary-600">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-white">
              The principles that guide everything we do at Kulobal Health
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  className="rounded-lg bg-gray-50 p-6 text-center dark:border dark:border-gray-600 dark:bg-transparent"
                  key={value.id}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800 text-lg dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    {value.description}
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
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-primary-600">
              Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-white">
              Kulobal Health is powered by a diverse team of healthcare
              professionals, technology experts, and business leaders who are
              passionate about improving healthcare accessibility in Ghana. Our
              combined expertise in healthcare, technology, logistics, and
              artificial intelligence enables us to build solutions that truly
              understand and address the unique challenges facing Ghana&apos;s
              healthcare supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-primary-600">
              Why Choose Kulobal Health?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-white">
              We&apos;re more than just a marketplace - we&apos;re your partner
              in transforming healthcare supply chains
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {whyChooseUs.map((reason) => (
                <div
                  className="flex items-start rounded-lg bg-gray-50 p-4 dark:border dark:border-gray-600 dark:bg-transparent"
                  key={reason.id}
                >
                  <div className="mt-1 mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600">
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 text-sm dark:text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 px-4">
        <div className="container mx-auto py-16 text-center">
          <h2 className="mb-4 font-bold text-4xl text-white">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            Join the healthcare revolution and be part of improving patient care
            across Ghana
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/pharmacies">
              <Button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-50">
                For Pharmacies
              </Button>
            </Link>
            <Link href="/suppliers">
              <Button
                className="rounded-lg border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-primary-600"
                variant="outline"
              >
                For Suppliers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
