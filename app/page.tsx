"use client";

import { Printer } from "lucide-react";
import { CatalogCover } from "@/components/CatalogCover";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, MeatType } from "@/lib/data";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  // Group products by meat_type
  const categories: MeatType[] = [
    "Res",
    "Cerdo",
    "Pollo",
    "Embutidos",
    "Complementos",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gray-900 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all print:hidden flex items-center gap-2"
        aria-label="Exportar PDF"
      >
        <Printer size={20} />
        <span className="hidden sm:inline font-light text-sm tracking-widest uppercase text-xs">
          Exportar PDF
        </span>
      </button>

      <div className="max-w-[800px] mx-auto bg-white shadow-sm print:shadow-none">
        <CatalogCover logoSrc="/disgom_logo.png" />

        <section className="p-0 sm:p-4 print:p-0">
          {categories.map((category) => {
            const categoryProducts = PRODUCTS.filter(
              (p) => p.meat_type === category,
            );
            if (categoryProducts.length === 0) return null;

            // Chunk products by 4 for PDF grouping
            const chunks = [];
            for (let i = 0; i < categoryProducts.length; i += 4) {
              chunks.push(categoryProducts.slice(i, i + 4));
            }

            return (
              <div key={category} className="mb-12 print:mb-0">
                {chunks.map((chunk, chunkIndex) => (
                  <div
                    key={`${category}-${chunkIndex}`}
                    className="mb-12 print:mb-8 print:pt-8 print:break-inside-avoid-page"
                  >
                    {/* <div className="px-6 py-12 text-center print:py-8 print:break-after-avoid"> */}
                    {/* <h2 className="text-3xl font-extralight tracking-[0.2em] text-gray-900 mb-2 uppercase italic print:text-xl"> */}
                    {/* {category} */}
                    {/* {chunkIndex > 0 && <span className="print:inline hidden">(cont.)</span>} */}
                    {/* </h2> */}
                    {/* <div className="w-16 h-px bg-gray-200 mx-auto" /> */}
                    {/* </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border-y border-gray-100 print:grid print:grid-cols-2 print:gap-[15px] print:px-[15px] print:bg-transparent print:border-none">
                      {chunk.map((product, index) => (
                        <ProductCard
                          key={`${product.name}-${index}`}
                          product={product}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </section>

        {/* Footer for print only */}
        <footer className="hidden print:flex flex-col items-center justify-center p-12 border-t border-gray-100 text-gray-400 text-[10px] tracking-[0.2em] uppercase text-center w-full">
          <p>© {new Date().getFullYear()} Disgom - Calidad Premium</p>
          <p className="mt-2 text-[8px]">
            WhatsApp: +504 9999-9999 • San Pedro Sula
          </p>
        </footer>
      </div>
    </main>
  );
}
