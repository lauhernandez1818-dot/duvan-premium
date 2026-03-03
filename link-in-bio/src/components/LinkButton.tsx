import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface LinkItem {
  id: string;
  label: string;
  to?: string;
  href?: string;
}

interface LinkButtonProps {
  item: LinkItem;
  icon: ReactNode;
  index: number;
}

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: 'spring',
      stiffness: 200,
      damping: 24,
    },
  }),
};

const buttonClass =
  'link-btn group relative w-full flex items-center gap-4 sm:gap-5 rounded-2xl overflow-hidden ' +
  'border-2 border-amber-400/40 bg-gradient-to-br from-amber-950/40 via-amber-900/25 to-amber-950/40 backdrop-blur-xl ' +
  'py-4 sm:py-5 px-5 sm:px-6 font-semibold text-white ' +
  'shadow-[0_4px_0_0_rgba(251,191,36,0.2),0_0_0_1px_rgba(251,191,36,0.2),0_20px 40px -12px_rgba(0,0,0,0.5)] ' +
  'hover:border-amber-300/70 hover:from-amber-900/50 hover:via-amber-800/35 hover:to-amber-900/50 ' +
  'hover:shadow-[0_6px_0_0_rgba(251,191,36,0.3),0_0_0_1px_rgba(251,191,36,0.35),0_28px 50px -12px_rgba(0,0,0,0.55),0_0_30px_rgba(245,158,11,0.15)] ' +
  'active:scale-[0.99] active:shadow-[0_2px_0_0_rgba(251,191,36,0.2)] ' +
  'transition-all duration-300 ease-out touch-manipulation min-h-[56px] sm:min-h-[60px]';

export function LinkButton({ item, icon, index }: LinkButtonProps) {
  const isInternal = item.to != null;

  const content = (
    <>
      <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-amber-950 bg-gradient-to-br from-amber-400 to-amber-500 border-2 border-amber-300/60 shadow-[0_4px_0_0_rgba(180,83,9,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:from-amber-300 group-hover:to-amber-400 group-hover:border-amber-200/80 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4),0_4px_0_0_rgba(180,83,9,0.4)] transition-all duration-300">
        {icon}
      </span>
      <span className="flex-1 text-left text-sm sm:text-base font-semibold tracking-wide text-white group-hover:text-amber-50">
        {item.label}
      </span>
    </>
  );

  return (
    <motion.li
      variants={listItemVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="list-none"
    >
      {isInternal ? (
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <Link to={item.to!} className={buttonClass}>
            {content}
          </Link>
        </motion.div>
      ) : (
        <motion.a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={buttonClass}
        >
          {content}
        </motion.a>
      )}
    </motion.li>
  );
}
