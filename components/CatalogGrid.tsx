'use client';

import { Product } from '@/lib/data';
import { ProductCard } from './ProductCard';

interface CatalogGridProps {
  products: Product[];
}

export const CatalogGrid = ({ products }: CatalogGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border-y border-gray-100 print:bg-white print:block print:border-none">
      {products.map((product, index) => (
        <ProductCard key={`${product.name}-${index}`} product={product} />
      ))}
    </div>
  );
};
