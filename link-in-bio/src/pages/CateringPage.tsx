import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cateringText } from '@/data/catering';

const WHATSAPP_URL = 'https://wa.me/584241520170?text=' + encodeURIComponent('Hola, me interesa solicitar información sobre catering corporativo.');

export function CateringPage() {
  return (
    <div className="pt-14 pb-12 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-extrabold text-white text-center mb-2"
        >
          {cateringText.titulo}
        </motion.h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          {cateringText.descripcion}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
        </motion.div>

        <p className="text-gray-500 text-sm mb-4">Nuestras instalaciones</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-8 flex items-center justify-center"
        >
          <span className="text-sm sm:text-base font-semibold text-gray-300">
            Esperando foto
          </span>
        </motion.div>
      </main>
    </div>
  );
}
