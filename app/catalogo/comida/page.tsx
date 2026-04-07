'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ChevronLeft, Home } from 'lucide-react';
import { comidasNormales, type PlatoComida } from '@/src/data/catalogo/comidas';
import { itemStagger } from '@/src/lib/catalogo/motion';
import ProfessionalModal from '@/src/components/ProfessionalModal';
import Link from 'next/link';

const pageTitle = 'Menú Diario';
const pageSubtitle = 'Sección saludable y viandas. Cada plato listo para servir en tu empresa.';

type Slide = { tipo: 'image' | 'video'; plato: PlatoComida };

export default function ComidaPage() {
  const slides: Slide[] = useMemo(
    () =>
      comidasNormales.flatMap<Slide>((plato) =>
        plato.video
          ? [
              { tipo: 'image', plato },
              { tipo: 'video', plato },
            ]
          : [{ tipo: 'image', plato }],
      ),
    [],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (platoIndex: number) => {
    const firstSlide = slides.findIndex(
      (s) => s.plato.id === comidasNormales[platoIndex].id && s.tipo === 'image',
    );
    setActiveIndex(firstSlide === -1 ? 0 : firstSlide);
  };

  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : (prev ?? 0) - 1));
  };
  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-[460px] mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/catalogo" className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <ChevronLeft className="w-5 h-5" />
            Volver
          </Link>
          <Link href="/" className="p-2 text-white/60 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <main className="w-full max-w-[460px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight text-white"
          >
            {pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="text-sm text-blue-200/60 text-center mb-8"
          >
            {pageSubtitle}
          </motion.p>

          <ul className="flex flex-col gap-6">
            {comidasNormales.map((plato, index) => (
              <motion.li
                key={plato.id}
                variants={itemStagger(index)}
                initial="initial"
                animate="animate"
                className="list-none"
              >
                <article className="rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden shadow-xl hover:border-blue-500/30 transition-colors">
                  <div className="relative aspect-video">
                    <img 
                      src={plato.image} 
                      alt={plato.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-white font-bold text-xl">{plato.title}</h2>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{plato.contiene}</p>
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => openLightbox(index)}
                        className="bg-blue-600/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full border border-blue-600/30 hover:bg-blue-600/40 transition-all"
                      >
                        VER GALERÍA
                      </button>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </main>
      </div>

      <ProfessionalModal
        isOpen={activeIndex !== null}
        onClose={closeLightbox}
        items={slides.map(s => ({
          src: s.plato.image,
          alt: s.plato.title,
          title: s.plato.title,
          description: s.plato.contiene,
          video: s.tipo === 'video' ? s.plato.video : null
        }))}
        currentIndex={activeIndex ?? 0}
        onNext={goNext}
        onPrev={goPrev}
        categoryLabel="Menú Diario"
        icon={UtensilsCrossed}
      />
    </div>
  );
}
