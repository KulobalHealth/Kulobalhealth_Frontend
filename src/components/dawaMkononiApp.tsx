"use client";

import { Icons } from "./ui/icons";
import Image from "next/image";
import devices from "../../public/images/devices.8e65df22d020.webp";
import { motion } from "motion/react";

export default function DawaMkononiApp() {
  return (
    <section className="px-4 font-urbanist">
      <div className="container px-4 py-10 mx-auto md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <h2 className="mb-12 text-2xl font-semibold text-center md:text-4xl font-urbanist">
              Our Dawa Mkononi app empowers healthcare providers
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="z-10 lg:sticky lg:top-8 lg:h-fit"
          >
            <figure>
              <Image
                src={devices}
                alt="Dawa Mkononi Devices"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </figure>
          </motion.div>

          <div className="relative z-20 space-y-8 bg-white">
            <FeatureItem
              icon={
                <Icons.Layers className="w-8 h-8 text-primary fill-primary" />
              }
              title="Stock List"
              description="Digitize your stock process, by having a virtual paper for your convenience."
            />
            <FeatureItem
              icon={
                <Icons.Currency className="w-8 h-8 text-primary fill-primary" />
              }
              title="Reorder"
              description="Hustle free reordering of medications from your previous orders."
            />
            <FeatureItem
              icon={
                <Icons.Server className="w-8 h-8 text-primary fill-primary" />
              }
              title="Payment"
              description="Pay instantly and securely using Selcom Pay during checkout."
            />
            <FeatureItem
              icon={
                <Icons.Shipment className="w-8 h-8 text-primary fill-primary" />
              }
              title="Delivery"
              description="We provide fast and reliable deliveries to your facility."
            />
            <FeatureItem
              icon={
                <Icons.ShoppingCart className="w-8 h-8 text-primary fill-primary" />
              }
              title="Orders"
              description="Review your previous orders to help you manage your stock well."
            />
            <FeatureItem
              icon={
                <Icons.Compare className="w-8 h-8 text-primary fill-primary" />
              }
              title="Categories"
              description="Browse through different categories to easily find the medications."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start space-x-4"
    >
      <div className="flex items-center justify-center p-2 rounded-xl bg-primary/10">
        {icon}
      </div>
      <div>
        <h4 className="mb-2 text-xl font-semibold">{title}</h4>
        <p className="">{description}</p>
      </div>
    </motion.div>
  );
}
