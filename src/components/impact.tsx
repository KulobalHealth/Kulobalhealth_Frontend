"use client";

import Image from "next/image";
import { motion } from "motion/react";
import stockImage from "../../public/images/stock.df9ca4ce2179.webp";

export default function Impact() {
  return (
    <section className="container px-4 py-10 mx-auto md:py-14">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: "100%", height: "0", paddingBottom: "56.25%" }}
              >
                <Image
                  src={stockImage}
                  alt="Reduced Stockouts"
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:ml-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-sm uppercase text-primary"
            >
              Our Impact
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 text-4xl lg:text-5xl"
            >
              Reduced Stockouts
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex mb-6 lg:pr-15"
            >
              <p className="mb-0">
                Through Data-driven Innovation, Health facilities now have
                consistent access to essential drugs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
