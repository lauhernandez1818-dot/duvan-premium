'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';
import ProfessionalModal from './ProfessionalModal';

const imagenes = [
  { src: '/imagenes/comida1.webp', name: 'Almuerzo Ejecutivo' },
  { src: '/imagenes/comida2.webp', name: 'Bowl de Proteína' },
  { src: '/imagenes/comida3.webp', name: 'Pollo al Horno' },
  { src: '/imagenes/comida4.webp', name: 'Carne en Salsa' },
  { src: '/imagenes/comida5.webp', name: 'Pescado Fresco' },
  { src: '/imagenes/comida6.webp', name: 'Pasta Italiana' },
  { src: '/imagenes/comida7.webp', name: 'Ensalada César' },
  { src: '/imagenes/comida8.webp', name: 'Arroz con Pollo' },
  { src: '/imagenes/comida9.webp', name: 'Solomo a la Plancha' },
  { src: '/imagenes/comida10.webp', name: 'Vegetales al Vapor' },
  { src: '/imagenes/comida11.webp', name: 'Pechuga Grillé' },
  { src: '/imagenes/comida12.webp', name: 'Menú Fit' },
  { src: '/imagenes/Hamburguesa.webp', name: 'Hamburguesa Duvan' },
];

export default function CollagePropuesta() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagenes.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 8) * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''
            } ${index === 12 ? 'lg:col-span-2 aspect-auto' : ''}`}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={img.src}
              alt={img.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {/* Overlay con nombre siempre visible en móvil o al hover en desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-6">
              <span className="text-white font-black text-sm sm:text-xl transform translate-y-2 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                {img.name.toUpperCase()}
              </span>
              <div className="hidden sm:flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Ver Detalle</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProfessionalModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={imagenes.map(img => ({
          src: img.src,
          alt: img.name,
          title: img.name,
        }))}
        currentIndex={lightboxIndex ?? 0}
        onNext={() => setLightboxIndex((prev) => (prev == null ? 0 : (prev + 1) % imagenes.length))}
        onPrev={() => setLightboxIndex((prev) => (prev == null ? 0 : (prev - 1 + imagenes.length) % imagenes.length))}
        categoryLabel="Propuesta Gastronómica"
      />
    </div>
  );
}
