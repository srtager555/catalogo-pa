'use client';

import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl print:shadow-none print:border-none print:break-inside-avoid print:mb-8">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-widest uppercase text-gray-900 shadow-sm">
            {product.meat_type}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col items-start gap-2">
        <h3 className="text-xl font-light tracking-tight text-gray-900 group-hover:text-black transition-colors">
          {product.name}
        </h3>
        <div className="w-8 h-[1px] bg-gray-100 group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  );
};
