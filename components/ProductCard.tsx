"use client";

import Image from "next/image";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl print:shadow-none print:border print:border-gray-100 print:break-inside-avoid print:mb-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50 print:aspect-[4/5]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Name Label - Non-absolute version for better PDF compatibility */}
      <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-center print:p-2">
        <h3 className="text-gray-900 text-sm font-medium tracking-tight uppercase text-center print:text-black print:text-[9px] print:font-bold">
          {product.meat_type} - {product.name}
        </h3>
      </div>
    </div>
  );
};
