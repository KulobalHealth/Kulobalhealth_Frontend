import { Check, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import groupImg from "@/../public/landing-page-images/MockUp3.webp";
import { Button } from "@/components/ui/button";
import { testimonialPoints } from "./data";

export default function TestimonialsPartners() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="container mx-auto lg:max-w-xl">
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              What Our Community Says
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Join thousands of pharmacies and suppliers who trust Kulobal
              Health for their supply chain needs
            </p>
            <div className="mb-6 flex flex-col gap-10">
              {" "}
              <ul className="mt-4 space-y-4">
                {testimonialPoints.map((point) => (
                  <li className="flex items-start" key={point.id}>
                    <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600">
                      {point.type === "quote" ? (
                        <Quote className="h-3 w-3 text-white" />
                      ) : (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed dark:text-white">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/about-us">
                <Button className="w-fit py-6 hover:cursor-pointer">
                  Read More Testimonials
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
                {" "}
                <Image
                  alt="Happy Healthcare Professionals"
                  className="rounded-[7px]"
                  fill
                  objectFit="cover"
                  src={groupImg}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
