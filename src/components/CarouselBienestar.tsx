'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, X, Maximize2 } from 'lucide-react';
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d2159]/95 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-[110] p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[16/10] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={imagenesBienestar[lightboxIndex].src!}
                  alt={imagenesBienestar[lightboxIndex].text}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                  <h3 className="text-3xl sm:text-5xl font-black text-white mb-2 italic">
                    {imagenesBienestar[lightboxIndex].text}
                  </h3>
                  <p className="text-lg sm:text-2xl text-gray-300">
                    {imagenesBienestar[lightboxIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </div>
  );
}
