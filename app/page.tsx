'use client';

import { Printer } from 'lucide-react';
import { CatalogCover } from '@/components/CatalogCover';
import { CatalogGrid } from '@/components/CatalogGrid';
import { PRODUCTS } from '@/lib/data';

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Print Button - Fixed on mobile for easy access */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gray-900 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all print:hidden flex items-center gap-2"
        aria-label="Exportar PDF"
      >
        <Printer size={20} />
        <span className="hidden sm:inline font-light text-sm tracking-widest uppercase text-xs">Exportar PDF</span>
      </button>

      <div className="max-w-[800px] mx-auto bg-white shadow-sm print:shadow-none">
        {/* Cover Page */}
        <CatalogCover logoSrc="/disgom_logo.jpeg" />

        {/* Product Listing */}
        <section className="p-0 sm:p-4 print:p-0">
          <div className="mb-12 px-6 pt-12 text-center print:hidden">
            <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2 uppercase">Nuestros Productos</h2>
            <div className="w-12 h-px bg-gray-100 mx-auto" />
          </div>
          
          <CatalogGrid products={PRODUCTS} />
        </section>

        {/* Footer for print only */}
        <footer className="hidden print:flex flex-col items-center justify-center p-12 border-t border-gray-100 text-gray-400 text-[10px] tracking-[0.2em] uppercase text-center w-full">
          <p>© {new Date().getFullYear()} Disgom - Calidad Premium</p>
          <p className="mt-2 text-[8px]">Generado automáticamente para Disgom</p>
        </footer>
      </div>
    </main>
  );
}
