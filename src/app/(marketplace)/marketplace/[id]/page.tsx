'use client';

import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMarketplaceStore } from '@/lib/store';

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { products, addToCart } = useMarketplaceStore();
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <Link
          className="inline-flex items-center font-medium text-lg"
          href="/marketplace"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-[68px] md:grid-cols-2">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="order-2 flex gap-2 md:order-1 md:flex-col">
            {product.images.map((image, index) => (
              <div
                className={`h-20 w-20 cursor-pointer overflow-hidden rounded-md border-2 ${
                  selectedImage === index
                    ? 'border-emerald-500'
                    : 'border-gray-200'
                }`}
                key={`thumbnail-${index}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  alt={`Product thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={80}
                  src={image || '/placeholder.svg'}
                  width={80}
                />
              </div>
            ))}
          </div>{' '}
          <div className="order-1 flex-1 overflow-hidden rounded-md bg-gray-100 md:order-2">
            <Image
              alt={product.name}
              className="h-full w-full object-contain"
              height={600}
              src={product.images[selectedImage] || '/placeholder.svg'}
              width={600}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            {' '}
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <div className="mt-4">
              <span className="font-bold text-3xl">
                GH₵ {product.price.toFixed(2)}
              </span>
              <div className="mt-1 flex items-center">
                <span
                  className={`text-sm ${
                    product.stockQuantity > 0
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                  }`}
                >
                  {product.stockQuantity > 0
                    ? `${product.stockQuantity} ${product.unit || 'items'} left`
                    : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Brand</h2>
            <p className="text-gray-700">{product.brand}</p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-lg">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <Button
            className="h-[50px] min-w-[222px] font-bold"
            disabled={product.stockQuantity === 0}
            onClick={() => addToCart(product.id)}
          >
            Add to cart
          </Button>

          <div className="mt-4 flex text-gray-600">
            <ShieldCheck className="mr-2 h-5 w-5" />
            <span>100% Secured Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
