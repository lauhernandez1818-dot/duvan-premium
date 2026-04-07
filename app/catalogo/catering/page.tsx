'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronLeft, Home, Building2 } from 'lucide-react';
import { cateringText } from '@/src/data/catalogo/catering';
import { pageEnter } from '@/src/lib/catalogo/motion';
import Link from 'next/link';

const cateringPhone = process.env.NEXT_PUBLIC_DUVAN_PHONE_1 || "";
const WHATSAPP_URL = cateringPhone ? `https://wa.me/${cateringPhone}?text=${encodeURIComponent('Hola, me interesa solicitar información sobre catering corporativo.')}` : "#";

export default function CateringPage() {
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
            initial={pageEnter.initial}
            animate={pageEnter.animate}
            transition={pageEnter.transition}
            className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight text-white"
          >
            {cateringText.titulo}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.06, duration: 0.28 }}
            className="text-sm text-blue-200/60 text-center mb-8"
          >
            {cateringText.descripcion}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.35 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl border border-blue-500/30 bg-blue-600/10 text-white font-bold hover:bg-blue-600/20 shadow-xl transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
          </motion.div>

          <div className="mt-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instalaciones de Primer Nivel</h3>
                <p className="text-gray-400 text-sm">Contamos con cocinas industriales certificadas y procesos estandarizados para garantizar la máxima higiene.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6"
            >
              <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Nuestro Compromiso</h4>
              <p className="text-gray-200 leading-relaxed">
                Cada servicio de catering es planeado meticulosamente. Desde la selección de materia prima hasta el transporte térmico especializado, nos aseguramos de que la experiencia sea impecable.
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
