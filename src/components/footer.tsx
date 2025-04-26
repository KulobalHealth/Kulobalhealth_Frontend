import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "./ui/icons";
import { ChevronDown, ClipboardMinus, MessageCircleMore } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 font-urbanist bg-primary-foreground">
      <div className="container px-6 mx-auto">
        <div className="grid gap-y-8 gap-x-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Dawa Mkononi App is available in your favourite store
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="p-6 text-white bg-black rounded-full"
                >
                  <Icons.Playstore className="w-6 h-6" />
                  Play Store
                </Button>
                <Button
                  variant="outline"
                  className="p-6 text-white bg-black rounded-full"
                >
                  <Icons.Appstore className="w-6 h-6" />
                  App Store
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Transforming Health System through Data-driven Innovation
              </h3>
              <Button variant="outline" className="p-6 bg-white rounded-full">
                <span className="flex items-center gap-2">
                  English
                  <ChevronDown />
                </span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>
              <h3 className="mb-4 font-semibold">
                <span className="flex items-center gap-2">
                  <ClipboardMinus />
                  Explore
                </span>
              </h3>
              <div className="space-y-2">
                <Link href="#" className="block  hover:text-emerald-500">
                  About Us
                </Link>
                <Link href="#" className="block  hover:text-emerald-500">
                  Our Contacts
                </Link>
                <Link href="#" className="block hover:text-emerald-500">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>
              <h3 className="mb-4 font-semibold">
                <span className="flex items-center gap-2">
                  <MessageCircleMore />
                  Socials
                </span>
              </h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-emerald-500">
                  LinkedIn
                </Link>
                <Link href="#" className="block  hover:text-emerald-500">
                  Twitter
                </Link>
                <Link href="#" className="block  hover:text-emerald-500">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-200">
          <p>© 2025 DMRX Pharmacy</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
