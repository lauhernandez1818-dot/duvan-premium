import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { postres } from '@/data/postres';
import { itemStagger } from '@/lib/motion';
import ProfessionalModal from '../components/ProfessionalModal';

const pageTitle = 'Postres';
const pageSubtitle = 'Dulces y repostería para cerrar tu menú.';

export function PostresPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === 0 ? postres.length - 1 : (prev ?? 0) - 1));
  };
  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === postres.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="pt-[max(3.5rem,env(safe-area-inset-top))] pb-[max(4rem,env(safe-area-inset-bottom))] safe-padding-x">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-2 tracking-tight"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            background: 'linear-gradient(180deg, #fff 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {pageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="text-sm text-blue-200/90 text-center mb-8"
        >
          {pageSubtitle}
        </motion.p>

        <ul className="flex flex-col gap-5">
          {postres.map((item, index) => (
            <motion.li
              key={item.id}
              {...itemStagger(index)}
              className="list-none"
            >
              <article className="rounded-2xl border-2 border-blue-400/20 bg-gradient-to-b from-blue-950/30 to-blue-950/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
                <div className="p-4">
                  <h2 className="text-white font-semibold text-lg">{item.title}</h2>
                  {item.descripcion && (
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.descripcion}</p>
                  )}
                </div>
                <div className="px-4 pb-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="text-xs font-semibold text-blue-300 hover:text-blue-200 rounded-full px-3 py-1.5 transition-colors"
                  >
                    Ver en grande
                  </button>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </main>

      <ProfessionalModal
        isOpen={activeIndex !== null}
        onClose={closeLightbox}
        items={postres.map(item => ({
          src: item.image,
          alt: item.title,
          title: item.title,
          description: item.descripcion
        }))}
        currentIndex={activeIndex ?? 0}
        onNext={goNext}
        onPrev={goPrev}
        categoryLabel="Postres"
        icon={Sparkles}
      />
    </div>
  );
}
