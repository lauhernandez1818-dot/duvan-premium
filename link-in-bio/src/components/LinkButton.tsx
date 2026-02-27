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
  hidden: { opacity: 0, x: -28 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.35 + i * 0.1,
      type: 'spring',
      stiffness: 260,
      damping: 22,
    },
  }),
};

const buttonClass =
  'link-btn group relative w-full flex items-center gap-3 sm:gap-4 bg-white/98 backdrop-blur-sm border-2 border-amber-500/90 rounded-2xl py-3.5 sm:py-4 px-4 sm:px-5 font-bold text-gray-900 shadow-lg hover:shadow-xl hover:border-amber-400 hover:bg-amber-50/90 active:scale-[0.98] transition-all duration-200 touch-manipulation min-h-[52px] sm:min-h-[56px] overflow-hidden';

export function LinkButton({ item, icon, index }: LinkButtonProps) {
  const isInternal = item.to != null;

  const content = (
    <>
      <span className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-600/20 flex items-center justify-center text-amber-700 group-hover:bg-amber-600/30 group-hover:scale-105 transition-all duration-200">
        {icon}
      </span>
      <span className="flex-1 text-left text-sm sm:text-base text-gray-900">{item.label}</span>
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
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link to={item.to!} className={buttonClass}>
            {content}
          </Link>
        </motion.div>
      ) : (
        <motion.a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={buttonClass}
        >
          {content}
        </motion.a>
      )}
    </motion.li>
  );
}
