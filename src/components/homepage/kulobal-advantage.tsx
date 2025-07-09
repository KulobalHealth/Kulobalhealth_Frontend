import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AiImg from "@/../public/landing-page-images/MockUp7.webp";
import { Button } from "@/components/ui/button";
import { advantages } from "./data";

export default function KulobalAdvantage() {
  return (
    <section className="px-4">
      <div className="container mx-auto py-16">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded-lg"
                style={{ width: "100%", height: "0", paddingBottom: "90.25%" }}
              >
                {" "}
                <Image
                  alt="AI-Powered Healthcare Technology"
                  className="rounded-[7px]"
                  fill
                  objectFit="cover"
                  src={AiImg}
                />
              </figure>
            </div>
          </div>
          <div className="container mx-auto lg:max-w-xl">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="font-medium text-gray-700 text-sm">
                AI-Powered Platform
              </span>
            </div>
            <h2 className="mb-4 font-semibold text-4xl text-primary-600">
              The Kulobal Health Advantage
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Harness the power of artificial intelligence to revolutionize your
              healthcare supply chain management
            </p>
            <div className="mb-6 flex flex-col gap-10">
              <ul className="mt-4 space-y-3">
                {advantages.map((advantage) => (
                  <li className="flex items-start" key={advantage.id}>
                    <div className="mt-1 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 text-sm dark:text-gray-300">
                        {advantage.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link className="w-fit" href="/about-us">
                <Button className="w-fit py-6 hover:cursor-pointer">
                  Learn More About Our AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
