'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const imagenes = [
  { src: '/imagenes/imagen1.jpeg', alt: 'Inversiones Duvan - Propuesta gastronómica 1' },
  { src: '/imagenes/imagen2.jpeg', alt: 'Inversiones Duvan - Propuesta gastronómica 2' },
  { src: '/imagenes/imagen3.jpeg', alt: 'Inversiones Duvan - Propuesta gastronómica 3' },
  { src: '/imagenes/imagen4.jpeg', alt: 'Inversiones Duvan - Propuesta gastronómica 4' },
];

export default function CarouselPropuesta() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="w-full max-w-4xl mx-auto min-w-0 overflow-hidden">
      {/* Borde paleta marca: wrapper con gradiente rojo-azul */}
      <div className="p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600 to-blue-600">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {imagenes.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] sm:aspect-video">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flechas minimalistas */}
      <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6">
        <button
          type="button"
          onClick={scrollPrev}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        {/* Dots */}
        <div className="flex gap-2">
          {imagenes.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                index === selectedIndex
                  ? 'bg-gradient-to-r from-red-600 to-blue-600 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
