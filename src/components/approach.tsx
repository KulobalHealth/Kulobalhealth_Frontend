"use client";

import Image from "next/image";
import { Icons } from "./ui/icons";
import homeImage from "../../public/images/pharmaImage.webp";
import { motion } from "motion/react";

const approaches = [
  {
    id: 1,
    icon: Icons.Currency,
    title: "Credit Financing",
    description: "Helping healthcare providers manage cash flow efficiently.",
  },
  {
    id: 2,
    icon: Icons.PushCart,
    title: "Extensive Product Range",
    description: "Access to high-quality, authentic medications.",
  },
  {
    id: 3,
    icon: Icons.BarChart,
    title: "Data-Driven Ordering",
    description: "Simplifying procurement with intelligent insights.",
  },
  {
    id: 4,
    icon: Icons.Shipment,
    title: "On-time Delivery",
    description: "Timely distribution to avoid stockouts.",
  },
  {
    id: 5,
    icon: Icons.Secure,
    title: "Authentic Products",
    description: "Reducing the risk of counterfeit medicines.",
  },
];

export default function Approach() {
  return (
    <section className="px-4 py-10 bg-primary-foreground md:py-14">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* <div className="hidden lg:block lg:w-1/12"></div> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 w-full lg:w-5/12 md:order-1"
          >
            <h3 className="text-3xl md:text-4xl mb-7">
              Our Approach to Improving Healthcare Supply Chains
            </h3>
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-4"
              >
                <div className="mr-4">
                  <approach.icon className="w-12 h-12 fill-primary text-primary" />
                </div>
                <div>
                  <h5 className="mb-1 text-xl">{approach.title}</h5>
                  <p className="mb-1">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 w-full lg:w-6/12 md:order-2"
          >
            <figure className="relative w-full h-[300px] md:h-[500px]">
              <Image
                className="object-contain rounded"
                src={homeImage}
                alt="Healthcare Supply Chain Approach"
                fill
                priority
              />
            </figure>
          </motion.div>
          <div className="hidden lg:block lg:w-1/12"></div>
        </div>
      </div>
    </section>
  );
}
