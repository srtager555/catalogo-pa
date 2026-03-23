'use client';

import Image from 'next/image';

interface CatalogCoverProps {
  logoSrc: string;
}

export const CatalogCover = ({ logoSrc }: CatalogCoverProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] p-8 text-center bg-white print:break-after-page print:m-0">
      <div className="relative w-64 h-64 mb-12 animate-in fade-in zoom-in duration-1000">
        <Image
          src={logoSrc}
          alt="Disgom Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-5xl font-extralight tracking-tighter text-gray-900 mb-4 uppercase">
        Catálogo de Productos
      </h1>
      <div className="w-12 h-0.5 bg-gray-200 mb-8" />
      <p className="text-gray-400 font-light tracking-widest uppercase text-sm">
        Premium Quality Selection
      </p>
      
      <div className="absolute bottom-12 text-gray-300 text-xs font-light tracking-widest uppercase animate-pulse print:hidden">
        Desliza para ver más
      </div>
    </section>
  );
};
