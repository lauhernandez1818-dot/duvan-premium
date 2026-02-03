'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const scrollY = window.scrollY ?? document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const prevScrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (prevScrollY) window.scrollTo(0, parseInt(prevScrollY || '0', 10) * -1);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [lightboxIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto min-w-0 overflow-hidden">
      {/* Borde paleta marca: wrapper con gradiente rojo-azul */}
      <div className="p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600 to-blue-600">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {imagenes.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] sm:aspect-video group cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                    <Maximize2 className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Ver en grande</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox fotos - portal a body, fondo opaco tapa todo */}
      {typeof document !== 'undefined' &&
        lightboxIndex !== null &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              className="fixed z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                minWidth: '100vw',
                height: '100%',
                minHeight: '100dvh',
                backgroundColor: '#18181b',
              }}
              onClick={() => setLightboxIndex(null)}
            >
              {/* Capa de fondo que tapa todo: no se ve nada de la página */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100dvh',
                  minHeight: '100vh',
                  backgroundColor: '#18181b',
                }}
                aria-hidden
              />
            {/* Cerrar - arriba derecha como galería */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[70] w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Info superior - como galería */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-[70] flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="text-white font-bold text-xs sm:text-sm">
                  Foto {lightboxIndex + 1} de {imagenes.length}
                </span>
              </div>
            </div>

            {/* Imagen - un poco más pequeña */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-4xl h-[60vh] sm:h-[70vh] md:h-[75vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagenes[lightboxIndex].src}
                alt={imagenes[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Controles inferiores - como galería, paleta rojo/azul */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-3 sm:gap-6">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
                }}
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95 touch-manipulation"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="bg-gradient-to-r from-red-600/80 to-blue-600/80 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2 sm:py-3 shadow-2xl">
                <span className="text-white font-black text-sm sm:text-lg">
                  {lightboxIndex + 1} <span className="text-white/70 font-normal">de</span> {imagenes.length}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
                }}
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95 touch-manipulation"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
          </AnimatePresence>,
          document.body
        )}

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
