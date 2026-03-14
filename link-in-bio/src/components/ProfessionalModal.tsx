import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, UtensilsCrossed, LucideIcon } from 'lucide-react';

interface MediaItem {
  id?: string | number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  video?: string | null;
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

  // Bloqueo de scroll básico para Vite/React
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (items.length === 0) return null;
  const currentItem = items[currentIndex >= 0 && currentIndex < items.length ? currentIndex : 0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0d2159] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col sm:flex-row max-h-[85vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[120] w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Content */}
            <div className="relative flex-1 bg-black/20 flex flex-col overflow-hidden">
              <div className="relative flex-1 min-h-[250px] flex items-center justify-center">
                {currentItem.video ? (
                  <video
                    src={currentItem.video}
                    controls
                    autoPlay
                    className="max-h-[50vh] sm:max-h-[70vh] w-full object-contain p-2"
                    playsInline
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="max-h-[50vh] sm:max-h-[70vh] w-full object-contain p-2"
                  />
                )}
              </div>
              
              {/* Nav controls mobile */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 sm:hidden">
                <button 
                  onClick={onPrev} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={onNext} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* Info Panel */}
            <div className="w-full sm:w-72 md:w-80 p-6 flex flex-col justify-between bg-gradient-to-b from-white/5 to-transparent border-t sm:border-t-0 sm:border-l border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/60 font-bold text-[10px] tracking-widest uppercase">
                    {categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-2 italic">
                  {currentItem.title || currentItem.alt}
                </h3>
                
                {currentItem.description && (
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {currentItem.description}
                  </p>
                )}

                <div className="text-center sm:text-left">
                  <span className="text-white font-black text-lg">
                    {currentIndex + 1} <span className="text-white/30 font-normal mx-1">/</span> {items.length}
                  </span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden sm:flex items-center justify-between mt-6">
                <button
                  onClick={onPrev}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={onNext}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
