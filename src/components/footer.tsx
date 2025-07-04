import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const usefulLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Cookies Settings" },
];

const productsAndServices = [
  { href: "#", text: "Kulobal.com" },
  { href: "#", text: "Marketplace" },
  { href: "#", text: "Detection" },
];

const helpLinks = [
  { href: "#", text: "Help Center" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Partner Services" },
];

export default function Footer() {
  return (
    <footer className="border-t px-8 py-[111px] md:px-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="flex flex-col gap-3.5">
            <Link className="font-bold text-2xl text-primary-500" href="/">
              <Image
                alt="KulobalHealth"
                className="transition-transform duration-300 hover:brightness-110"
                height={180}
                src="/logo.webp"
                width={180}
              />
            </Link>
            <p className="text-gray-700 text-sm dark:text-white">
              Enhance your pharmacy services and improve customer satisfaction
              with these innovative tools available on Kulobal Health.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Useful links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-gray-700 text-sm underline hover:text-primary-500 dark:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Products & Services</h3>
            <ul className="space-y-2">
              {productsAndServices.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-gray-700 text-sm hover:text-primary-500 dark:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-gray-700 text-sm hover:text-primary-500 dark:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Subscribe to our newsletter</h3>
            <p className="text-gray-700 text-sm dark:text-white">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col gap-4">
              <input
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="h-12 w-[178px] rounded-xl font-bold text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="my-8 border-gray-200 border-t" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-700 text-sm dark:text-white">
            © 2025 KulobalHealth. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link
              className="text-gray-700 hover:text-primary-500 dark:text-white"
              href="#"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              className="text-gray-700 hover:text-primary-500 dark:text-white"
              href="#"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              className="text-gray-700 hover:text-primary-500 dark:text-white"
              href="#"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
