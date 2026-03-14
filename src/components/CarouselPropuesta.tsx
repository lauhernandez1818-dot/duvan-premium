'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfessionalModal from './ProfessionalModal';

const imagenes = [
  { src: '/imagenes/comida1.webp', alt: 'Inversiones Duvan - Comida 1', label: null as string | null, video: null as string | null },
  { src: '/imagenes/comida2.webp', alt: 'Inversiones Duvan - Comida 2', label: null, video: null },
  { src: '/imagenes/comida3.webp', alt: 'Inversiones Duvan - Comida 3', label: null, video: null },
  { src: '/imagenes/comida4.webp', alt: 'Inversiones Duvan - Comida 4', label: null, video: null },
  { src: '/imagenes/comida5.webp', alt: 'Inversiones Duvan - Comida 5', label: null, video: null },
  { src: '/imagenes/comida6.webp', alt: 'Inversiones Duvan - Comida 6', label: null, video: null },
  { src: '/imagenes/comida7.webp', alt: 'Inversiones Duvan - Comida 7', label: null, video: null },
  { src: '/imagenes/comida8.webp', alt: 'Inversiones Duvan - Comida 8', label: null, video: null },
  { src: '/imagenes/comida9.webp', alt: 'Inversiones Duvan - Comida 9', label: null, video: null },
  { src: '/imagenes/comida10.webp', alt: 'Inversiones Duvan - Comida 10', label: null, video: null },
  { src: '/imagenes/comida11.webp', alt: 'Inversiones Duvan - Comida 11', label: null, video: null },
  { src: '/imagenes/comida12.webp', alt: 'Inversiones Duvan - Comida 12', label: null, video: null },
  { src: '/imagenes/comida13.webp', alt: 'Inversiones Duvan - Comida 13', label: null, video: null },
  { src: '/imagenes/comida14.webp', alt: 'Inversiones Duvan - Comida 14', label: null, video: null },
  { src: '/imagenes/comida15.webp', alt: 'Inversiones Duvan - Comida 15', label: null, video: null },
  { src: '/imagenes/comida16.webp', alt: 'Inversiones Duvan - Comida 16', label: null, video: null },
  { src: '/imagenes/comida17.webp', alt: 'Inversiones Duvan - Comida 17', label: null, video: null },
  { src: '/imagenes/comida18.webp', alt: 'Inversiones Duvan - Comida 18', label: null, video: null },
  { src: '/imagenes/comida19.webp', alt: 'Inversiones Duvan - Comida 19', label: null, video: null },
  { src: '/imagenes/comida20.webp', alt: 'Inversiones Duvan - Comida 20', label: null, video: null },
  { src: '/imagenes/comida21.webp', alt: 'Inversiones Duvan - Comida 21', label: null, video: null },
  { src: '/imagenes/Hamburguesa.webp', alt: 'Hamburguesa Duvan', label: 'Hamburguesa Duvan', video: '/videos/HamburguesaV.mp4' },
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="w-full max-w-[min(100%,64rem)] xl:max-w-[min(100%,76rem)] min-[1920px]:max-w-[min(100%,88rem)] mx-auto min-w-0 overflow-hidden">
      {/* Borde paleta marca: wrapper con gradiente rojo-azul */}
      <div className="p-1.5 sm:p-2 xl:p-2.5 min-[1920px]:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600 to-blue-600">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0d2159]" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {imagenes.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] sm:aspect-[16/10] group cursor-pointer overflow-hidden"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 85vw"
                  priority={index === 0}
                />
                {/* Etiqueta tipo "Hamburguesa Duvan" cuando existe */}
                {img.label && (
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex justify-center pointer-events-none">
                    <span className="bg-gradient-to-r from-red-600/90 to-blue-600/90 backdrop-blur-md text-white font-black text-sm sm:text-base px-4 py-2 rounded-xl border border-white/30 shadow-xl">
                      {img.label}
                    </span>
                  </div>
                )}
                {/* Overlay con pointer-events-none para que el hover se detecte en el grupo y la animación se vea */}
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 ease-out flex items-center justify-center pointer-events-none"
                  aria-hidden
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-white/40 scale-90 group-hover:scale-100">
                    <Maximize2 className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Ver en grande</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Using Shared Component */}
      <ProfessionalModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={imagenes.map(img => ({
          src: img.src,
          alt: img.alt,
          title: img.label || img.alt,
          video: img.video
        }))}
        currentIndex={lightboxIndex ?? 0}
        onNext={() => setLightboxIndex((prev) => (prev == null ? 0 : (prev + 1) % imagenes.length))}
        onPrev={() => setLightboxIndex((prev) => (prev == null ? 0 : (prev - 1 + imagenes.length) % imagenes.length))}
        categoryLabel="Propuesta Gastronómica"
      />

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
