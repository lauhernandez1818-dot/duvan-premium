import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cateringText } from '@/data/catering';
import { pageEnter } from '@/lib/motion';

const WHATSAPP_URL =
  'https://wa.me/584241520170?text=' +
  encodeURIComponent('Hola, me interesa solicitar información sobre catering corporativo.');

export function CateringPage() {
  return (
    <div className="pt-14 pb-16 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={pageEnter.initial}
          animate={pageEnter.animate}
          transition={pageEnter.transition}
          className="text-2xl sm:text-3xl font-semibold text-center mb-2 tracking-tight"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            background: 'linear-gradient(180deg, #fff 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {cateringText.titulo}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.06, duration: 0.28 }}
          className="text-sm text-blue-200/90 text-center mb-8"
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
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border-2 border-blue-400/40 bg-gradient-to-br from-blue-950/40 to-blue-900/30 text-white font-semibold hover:border-blue-300/60 hover:from-blue-900/50 hover:to-blue-800/40 shadow-[0_4px_0_0_rgba(59,130,246,0.2)] hover:shadow-[0_6px_0_0_rgba(59,130,246,0.3)] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.35 }}
          className="text-xs text-blue-300/80 mt-8 mb-3"
        >
          Nuestras instalaciones
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.35 }}
          className="rounded-2xl border-2 border-blue-400/20 bg-gradient-to-b from-blue-950/30 to-blue-950/10 px-4 py-10 flex items-center justify-center"
        >
          <span className="text-sm text-blue-200/70">Esperando foto</span>
        </motion.div>
      </main>
    </div>
  );
}
