"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useMarketplaceStore } from "@/lib/store";
import { notFound, useParams } from "next/navigation";
import placeholderMed from "@/../public/med.png";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { products } = useMarketplaceStore();
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const images = [
    placeholderMed,
    placeholderMed,
    placeholderMed,
    placeholderMed,
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <Link
          href="/marketplace"
          className="inline-flex items-center text-lg font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 order-2 md:order-1">
            {images.map((image, index) => (
              <div
                key={`thumbnail-${index}`}
                className={`border-2 rounded-md overflow-hidden cursor-pointer w-20 h-20 ${
                  selectedImage === index
                    ? "border-emerald-500"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="bg-gray-100 rounded-md overflow-hidden order-1 md:order-2 flex-1">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt="Malaria Test Kit"
              width={600}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Malaria Test Kits</h1>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                GH₵ {product.price.toFixed(2)}
              </span>
              <div className="flex items-center mt-1">
                <span
                  className={`text-sm ${
                    product.stockQuantity > 0
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {product.stockQuantity > 0
                    ? `${product.stockQuantity} ${product.unit || "items"} left`
                    : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Brand</h2>
            <p className="text-gray-700">OraSure Technologies</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Description goes here</li>
              <li>Description goes here</li>
              <li>Description goes here</li>
            </ul>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-md transition">
            Add to cart
          </button>

          <div className="flex items-center justify-center text-gray-600 mt-4">
            <ShieldCheck className="h-5 w-5 mr-2" />
            <span>100% Secured Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
