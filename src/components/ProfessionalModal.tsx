"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, UtensilsCrossed, LucideIcon } from 'lucide-react';

interface MediaItem {
  id?: string | number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  video?: string | null;
  label?: string | null;
}

interface ProfessionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MediaItem[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  icon?: LucideIcon;
  categoryLabel?: string;
}

export default function ProfessionalModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNext,
  onPrev,
  icon: Icon = UtensilsCrossed,
  categoryLabel = "Detalle"
}: ProfessionalModalProps) {
  
  // Keyboard support
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Bloqueo de scroll robusto
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  const currentItem = items[currentIndex];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop con blur profundo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl bg-[#0d2159] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col sm:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[120] w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 hover:border-white/40 active:scale-95 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Media Content */}
            <div className="relative flex-1 bg-black/20 flex flex-col overflow-hidden">
              <div className="relative flex-1 min-h-[300px] sm:h-full">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain p-2 sm:p-6"
                  quality={100}
                  priority
                />
              </div>
              
              {/* Optional Video section for Propuesta */}
              {currentItem.video && (
                <div className="bg-black/40 p-3 sm:p-4 border-t border-white/10">
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2 text-center">Video de Preparación</p>
                  <video
                    src={currentItem.video}
                    controls
                    className="w-full max-h-[150px] sm:max-h-[200px] object-contain rounded-lg shadow-lg"
                    playsInline
                  />
                </div>
              )}
              
              {/* Nav controls overlay for mobile */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 sm:hidden pointer-events-none">
                <button 
                  onClick={onPrev} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10 pointer-events-auto active:scale-90"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={onNext} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10 pointer-events-auto active:scale-90"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* Right Side: Info Panel */}
            <div className="w-full sm:w-80 md:w-96 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-white/5 to-transparent border-t sm:border-t-0 sm:border-l border-white/10 overflow-y-auto">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/60 font-bold text-sm tracking-widest uppercase">
                    {categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 italic leading-tight">
                  {currentItem.title || currentItem.alt}
                </h3>
                
                {currentItem.description && (
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                    {currentItem.description}
                  </p>
                )}

                <div className="space-y-4 hidden sm:block">
                  <div className="flex items-center gap-3 text-white/40 text-xs font-semibold tracking-wider">
                    <div className="h-px flex-1 bg-white/10" />
                    <span>NUESTRA GALERÍA</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="text-center">
                    <span className="text-white font-black text-2xl">
                      {currentIndex + 1} <span className="text-white/30 font-normal mx-1">/</span> {items.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation Controls */}
              <div className="hidden sm:flex items-center justify-between mt-8">
                <button
                  onClick={onPrev}
                  className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 hover:border-white/20 active:scale-95"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={onNext}
                  className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 hover:border-white/20 active:scale-95"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Keyboard Shortcuts Visual (Desktop) */}
              <div className="hidden sm:flex items-center justify-center gap-2 mt-6 text-white/20 text-[10px] font-bold tracking-widest uppercase">
                <span>ESC para cerrar</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
