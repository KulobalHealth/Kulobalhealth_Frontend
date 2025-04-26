"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Investor1 from "../../public/brands/1.b2c4cd627e24.webp";
import Investor2 from "../../public/brands/2.58bf420bf051.webp";
import Investor3 from "../../public/brands/3.f2223d22308d.webp";
import Investor4 from "../../public/brands/4.c4c0149e323e.webp";
import Investor5 from "../../public/brands/5.47bd1b8ecadc.webp";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const investors = [
  { id: 1, imgSrc: Investor1 },
  { id: 2, imgSrc: Investor2 },
  { id: 3, imgSrc: Investor3 },
  { id: 4, imgSrc: Investor4 },
  { id: 5, imgSrc: Investor5 },
];

export default function ValuedInvestors() {
  return (
    <section className="container py-10 mx-auto mb-10">
      <div className="container py-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center font-urbanist"
        >
          Our Valued Investors
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center"
        >
          {investors.map((investor) => (
            <motion.div
              key={investor.id}
              variants={item}
              className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center"
            >
              <figure className="px-2">
                <Image src={investor.imgSrc} alt={`Investor ${investor.id}`} />
              </figure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
