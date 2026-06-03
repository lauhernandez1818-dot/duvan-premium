'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import ProfessionalModal from '@/src/components/ProfessionalModal';
import type { LucideIcon } from 'lucide-react';

export interface GalleryItem {
  id: string;
  image: string;
}

interface HorizontalGalleryPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: GalleryItem[];
  accentColor?: string;
}

export default function HorizontalGalleryPage({
  title,
  subtitle,
  icon: Icon,
  items,
  accentColor = 'from-blue-600 to-blue-500',
}: HorizontalGalleryPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => setLightboxIndex((p) => ((p ?? 0) + 1) % items.length);
  const goPrev = () => setLightboxIndex((p) => ((p ?? 0) - 1 + items.length) % items.length);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/catalogo" className="flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Volver
          </Link>
          <Link href="/" className="p-2 text-white/60 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accentColor} flex items-center justify-center text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h1>
                <p className="text-sm text-white/50">{subtitle}</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll controls */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-white/40 font-medium">
              {items.length} {items.length === 1 ? 'foto' : 'fotos'} · Desliza para ver →
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/25 hover:text-white transition-all active:scale-90"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/25 hover:text-white transition-all active:scale-90"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Gallery - Images only */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-shrink-0 snap-start w-[280px] sm:w-[340px] cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden shadow-xl hover:border-blue-500/40 transition-all duration-300 hover:shadow-blue-500/10">
                  <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ProfessionalModal
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        items={items.map((item) => ({
          src: item.image,
          alt: title,
          title: '',
          description: '',
        }))}
        currentIndex={lightboxIndex ?? 0}
        onNext={goNext}
        onPrev={goPrev}
        categoryLabel={title}
        icon={Icon}
      />
    </div>
  );
}
