'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, X, Maximize2, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const imagenesBienestar = [
  { 
    id: 1, 
    src: '/imagenes/catering.webp',
    text: 'Colaboradores almorzando',
    description: 'Calidad y sabor en cada plato para tu equipo.'
  },
  { 
    id: 2, 
    src: '/imagenes/catering2.webp',
    text: 'Tranquilidad y Bienestar',
    description: 'Servicio impecable que garantiza la satisfacción total.'
  },
  { 
    id: 3, 
    src: '/imagenes/catering.webp',
    text: 'Sabor de Hogar',
    description: 'Comida fresca preparada diariamente con los mejores ingredientes.'
  },
  { 
    id: 4, 
    src: '/imagenes/catering2.webp',
    text: 'Gestión Eficiente',
    description: 'Nos encargamos de todo para que tú no tengas que preocuparte.'
  },
];

export default function CarouselBienestar() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Bloquear scroll cuando el lightbox está abierto
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex]);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % imagenesBienestar.length));
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + imagenesBienestar.length) % imagenesBienestar.length));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative group p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 to-red-600">
        <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-[#0d2159]" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {imagenesBienestar.map((item) => (
              <div
                key={item.id}
                className="relative flex-[0_0_100%] min-w-0 aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center bg-gray-900/40"
              >
                {item.src ? (
                  <div className="relative w-full h-full cursor-pointer group/zoom" onClick={() => setLightboxIndex(item.id - 1)}>
                    <Image
                      src={item.src}
                      alt={item.text}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/zoom:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority={item.id === 1}
                    />
                    <div className="absolute top-4 right-4 z-10 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover/zoom:opacity-100 transition-opacity">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 text-center px-4">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 animate-pulse">
                      <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500/50" />
                    </div>
                    <p className="text-xl sm:text-3xl font-black text-white italic opacity-40 uppercase tracking-widest">
                      {item.text}
                    </p>
                  </div>
                )}

                {/* Text Overlay for actual images */}
                {item.src && (
                  <div 
                    className="absolute inset-x-0 bottom-0 p-6 sm:p-12 bg-gradient-to-t from-[#0d2159] via-[#0d2159]/40 to-transparent pointer-events-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 italic">
                        {item.text}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-200 font-medium">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                )}
                
                {/* Decorative overlay for placeholders */}
                {!item.src && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2159] via-transparent to-transparent opacity-60" />
                    <div className="relative z-10 px-4 text-center">
                      <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all active:scale-95"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {imagenesBienestar.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d2159]"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Capa de fondo sólida como en video */}
            <div className="absolute inset-0 z-0 bg-[#0d2159]" aria-hidden />

            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[110] w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Info superior */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-[110] flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="text-white font-bold text-xs sm:text-sm">
                  Foto {lightboxIndex + 1}/{imagenesBienestar.length}
                </span>
              </div>
            </div>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[90%] h-[70vh] sm:h-[80vh] max-w-5xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagenesBienestar[lightboxIndex].src!}
                alt={imagenesBienestar[lightboxIndex].text}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            {/* Navegación inferior estilo Galería */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-3 sm:gap-6">
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95 touch-manipulation"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <div className="bg-gradient-to-r from-red-600/80 to-blue-600/80 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2 sm:py-3 shadow-2xl min-w-[120px] text-center">
                <span className="text-white font-black text-sm sm:text-lg">
                  {lightboxIndex + 1} <span className="text-white/70 font-normal">de</span> {imagenesBienestar.length}
                </span>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95 touch-manipulation"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Keyboard Support Visual */}
            <div className="hidden md:flex absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 gap-4 text-white/60 text-xs z-[110]">
              <span>← → Teclado</span>
              <span className="text-white/40">•</span>
              <span>ESC Cerrar</span>
            </div>

            {/* Overlay de texto (opcional, como en video) */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm z-[110] md:hidden">
              {imagenesBienestar[lightboxIndex].text}
            </p>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>

      {/* Keyboard Navigation Handler */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-0"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
          }}
          tabIndex={0}
          autoFocus
        />
      )}
    </div>
  );
}
