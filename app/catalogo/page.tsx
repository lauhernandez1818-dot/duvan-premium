import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Home, UtensilsCrossed, Phone, ImageIcon, Video, Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProfessionalModal from '@/src/components/ProfessionalModal';

const WHATSAPP_MSG = 'Hola, me interesa solicitar una cotización de almuerzos corporativos.';
const whatsappPhone = process.env.NEXT_PUBLIC_DUVAN_PHONE_1 || "";
const WHATSAPP_URL = whatsappPhone ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(WHATSAPP_MSG)}` : "#";

type CatalogType = 'plato' | 'informativo' | 'video';

interface CatalogItem {
  id: string;
  type: CatalogType;
  title: string;
  image: string;
  video?: string;
  alt: string;
}

const catalogItems: CatalogItem[] = [
  { id: 'c1', type: 'plato', title: 'Comida 1', image: '/imagenes/comida1.webp', alt: 'Inversiones Duvan - Comida 1' },
  { id: 'c2', type: 'plato', title: 'Comida 2', image: '/imagenes/comida2.webp', alt: 'Inversiones Duvan - Comida 2' },
  { id: 'c3', type: 'plato', title: 'Comida 3', image: '/imagenes/comida3.webp', alt: 'Inversiones Duvan - Comida 3' },
  { id: 'c4', type: 'plato', title: 'Comida 4', image: '/imagenes/comida4.webp', alt: 'Inversiones Duvan - Comida 4' },
  { id: 'c5', type: 'plato', title: 'Comida 5', image: '/imagenes/comida5.webp', alt: 'Inversiones Duvan - Comida 5' },
  { id: 'c6', type: 'plato', title: 'Comida 6', image: '/imagenes/comida6.webp', alt: 'Inversiones Duvan - Comida 6' },
  { id: 'c7', type: 'plato', title: 'Comida 7', image: '/imagenes/comida7.webp', alt: 'Inversiones Duvan - Comida 7' },
  { id: 'c8', type: 'plato', title: 'Comida 8', image: '/imagenes/comida8.webp', alt: 'Inversiones Duvan - Comida 8' },
  { id: 'c9', type: 'plato', title: 'Comida 9', image: '/imagenes/comida9.webp', alt: 'Inversiones Duvan - Comida 9' },
  { id: 'c10', type: 'plato', title: 'Comida 10', image: '/imagenes/comida10.webp', alt: 'Inversiones Duvan - Comida 10' },
  { id: 'c11', type: 'plato', title: 'Comida 11', image: '/imagenes/comida11.webp', alt: 'Inversiones Duvan - Comida 11' },
  { id: 'c12', type: 'plato', title: 'Comida 12', image: '/imagenes/comida12.webp', alt: 'Inversiones Duvan - Comida 12' },
  { id: 'c13', type: 'plato', title: 'Comida 13', image: '/imagenes/comida13.webp', alt: 'Inversiones Duvan - Comida 13' },
  { id: 'c14', type: 'plato', title: 'Comida 14', image: '/imagenes/comida14.webp', alt: 'Inversiones Duvan - Comida 14' },
  { id: 'c15', type: 'plato', title: 'Comida 15', image: '/imagenes/comida15.webp', alt: 'Inversiones Duvan - Comida 15' },
  { id: 'c16', type: 'plato', title: 'Comida 16', image: '/imagenes/comida16.webp', alt: 'Inversiones Duvan - Comida 16' },
  { id: 'c17', type: 'plato', title: 'Comida 17', image: '/imagenes/comida17.webp', alt: 'Inversiones Duvan - Comida 17' },
  { id: 'c18', type: 'plato', title: 'Comida 18', image: '/imagenes/comida18.webp', alt: 'Inversiones Duvan - Comida 18' },
  { id: 'c19', type: 'plato', title: 'Comida 19', image: '/imagenes/comida19.webp', alt: 'Inversiones Duvan - Comida 19' },
  { id: 'c20', type: 'plato', title: 'Comida 20', image: '/imagenes/comida20.webp', alt: 'Inversiones Duvan - Comida 20' },
  { id: 'c21', type: 'plato', title: 'Comida 21', image: '/imagenes/comida21.webp', alt: 'Inversiones Duvan - Comida 21' },
  { id: 'hamb', type: 'plato', title: 'Hamburguesa Duvan', image: '/imagenes/Hamburguesa.webp', video: '/videos/HamburguesaV.mp4', alt: 'Hamburguesa Duvan' },
  { id: 'v1', type: 'video', title: 'Hamburguesa Duvan', image: '/imagenes/Hamburguesa.webp', video: '/videos/HamburguesaV.mp4', alt: 'Video Hamburguesa Duvan' },
  { id: 'i1', type: 'informativo', title: 'Informativo 1', image: '/imagenes/Sobrenosotros (1).webp', alt: 'Inversiones Duvan - Informativo 1' },
  { id: 'i2', type: 'informativo', title: 'Informativo 2', image: '/imagenes/Sobrenosotros (2).webp', alt: 'Inversiones Duvan - Informativo 2' },
  { id: 'i3', type: 'informativo', title: 'Informativo 3', image: '/imagenes/Sobrenosotros (3).webp', alt: 'Inversiones Duvan - Informativo 3' },
  { id: 'i4', type: 'informativo', title: 'Informativo 4', image: '/imagenes/Sobrenosotros (4).webp', alt: 'Inversiones Duvan - Informativo 4' },
  { id: 'i5', type: 'informativo', title: 'Informativo 5', image: '/imagenes/Sobrenosotros (5).webp', alt: 'Inversiones Duvan - Informativo 5' },
  { id: 'i6', type: 'informativo', title: 'Informativo 6', image: '/imagenes/Sobrenosotros (6).webp', alt: 'Inversiones Duvan - Informativo 6' },
  { id: 'i7', type: 'informativo', title: 'Informativo 7', image: '/imagenes/Sobrenosotros (7).webp', alt: 'Inversiones Duvan - Informativo 7' },
  { id: 'i8', type: 'informativo', title: 'Informativo 8', image: '/imagenes/Sobrenosotros (8).webp', alt: 'Inversiones Duvan - Informativo 8' },
  { id: 'i9', type: 'informativo', title: 'Informativo 9', image: '/imagenes/Sobrenosotros (9).webp', alt: 'Inversiones Duvan - Informativo 9' },
  { id: 'i10', type: 'informativo', title: 'Informativo 10', image: '/imagenes/Sobrenosotros (10).webp', alt: 'Inversiones Duvan - Informativo 10' },
];

const filters: { value: 'todo' | CatalogType; label: string; icon: typeof UtensilsCrossed }[] = [
  { value: 'todo', label: 'Todo', icon: ImageIcon },
  { value: 'plato', label: 'Platos', icon: UtensilsCrossed },
  { value: 'informativo', label: 'Informativo', icon: Building2 },
  { value: 'video', label: 'Videos', icon: Video },
];

export default function CatalogoPage() {
  const [filter, setFilter] = useState<'todo' | CatalogType>('todo');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = filter === 'todo' ? catalogItems : catalogItems.filter((i) => i.type === filter);

  const closeLightbox = () => setSelectedIndex(null);
  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1);
  };
  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filtered.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <div className="min-h-screen bg-[#0d2159] overflow-x-hidden w-full max-w-[100vw] min-w-0">
      {/* WhatsApp flotante */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.35 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">Chatea con nosotros</div>
        </div>
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all">
          <svg className="w-9 h-9 sm:w-11 sm:h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </motion.a>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#0d2159]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 xl:px-8 py-3 sm:py-4 max-w-[100vw] min-w-0">
          <div className="flex items-center justify-between gap-2 min-w-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1 overflow-hidden">
              <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-md aspect-square">
                <Image src="/imagenes/logo-duvan.png" alt="Inversiones Duvan" fill className="object-contain" sizes="36px" priority />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 min-w-0 leading-tight">
                <span className="text-[11px] sm:text-xl font-black text-white whitespace-nowrap">INVERSIONES</span>
                <span className="text-[11px] sm:text-xl font-black bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">DUVAN</span>
              </div>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a href={whatsappPhone ? `tel:+${whatsappPhone}` : "#"} className="flex items-center gap-2 text-white hover:text-white/90 transition-colors min-h-[44px] items-center justify-center px-2 sm:px-3 rounded-lg hover:bg-white/10" aria-label="Llamar">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline text-sm font-medium">Llamar</span>
              </a>
              <Link href="/" className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-red-500/50 transition-all text-xs sm:text-base flex-shrink-0 min-h-[44px] items-center justify-center">
                <Home className="w-4 h-4 flex-shrink-0" />
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 sm:py-24 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 xl:px-8 relative z-10 max-w-[100vw] min-w-0 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
            <ImageIcon className="w-4 h-4 text-red-500" />
            <span className="text-white font-bold text-sm">Catálogo profesional</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 px-2 break-words">
            NUESTRO <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">CATÁLOGO</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto px-2">
            Fotos y videos de nuestros platos e información
          </motion.p>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-[57px] sm:top-[65px] z-30 py-3 bg-zinc-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 xl:px-8 max-w-[100vw] min-w-0">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => {
              const Icon = f.icon;
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
                    active
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white border-transparent shadow-lg shadow-red-600/20'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid catálogo */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 xl:px-8 min-[1920px]:px-12 max-w-[100vw] min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-600/10"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="block w-full text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                          <Video className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 ml-0.5" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 pb-3 px-3">
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${
                        item.type === 'plato' ? 'bg-red-600/90 text-white' :
                        item.type === 'informativo' ? 'bg-blue-600/90 text-white' : 'bg-emerald-600/90 text-white'
                      }`}>
                        {item.type === 'plato' ? 'Plato' : item.type === 'informativo' ? 'Informativo' : 'Video'}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base mt-1.5 line-clamp-2">{item.title}</h3>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">No hay elementos en esta categoría.</p>
          )}
        </div>
      </section>

      <ProfessionalModal
        isOpen={selectedIndex !== null}
        onClose={closeLightbox}
        items={filtered.map(item => ({
          src: item.image,
          alt: item.alt,
          title: item.title,
          video: item.video
        }))}
        currentIndex={selectedIndex ?? 0}
        onNext={goNext}
        onPrev={goPrev}
        categoryLabel="Catálogo"
        icon={ImageIcon}
      />
    </div>
  );
}
