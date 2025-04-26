"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-lg transition duration-300"
          : "bg-transparent transition duration-300"
      }
    >
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            <Image
              src="/logo.webp"
              alt="KulobalHealth"
              width={180}
              height={180}
              className="transition-transform duration-300 hover:brightness-110"
            />
          </Link>
        </motion.div>

        <div className="items-center hidden space-x-8 md:flex">
          {["About Us", "Our Team", "Contact Us"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="transition-colors duration-300 hover:text-emerald-500"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          {/* New Login button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/login"
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition duration-300"
            >
              Login
            </Link>
          </motion.div>
        </div>

        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden z-30"
              onClick={() => setIsOpen(false)}
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 bottom-0 left-0 w-64 bg-white shadow-lg md:hidden z-40"
            >
              <div className="p-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-emerald-500">
                  <Image
                    src="/logo.webp"
                    alt="KulobalHealth"
                    width={180}
                    height={180}
                    className="w-12 h-auto"
                  />
                </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close">
                  &#10005;
                </button>
              </div>
              <div className="px-4 py-6 space-y-4">
                {[ "Marketplace", "About Us", "Our Team",  "Contact Us"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="block transition-colors duration-300 hover:text-emerald-500"
                  >
                    {item}
                  </Link>
                ))}

                <Link
                  href="/login"
                  className="block px-4 py-2 bg-emerald-500 text-white rounded transition duration-300 hover:bg-emerald-600"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
