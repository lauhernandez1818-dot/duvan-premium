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
  'border border-white/20 bg-white/[0.07] backdrop-blur-xl ' +
  'py-4 sm:py-5 px-5 sm:px-6 font-semibold text-white ' +
  'shadow-[0_4px_0_0_rgba(255,255,255,0.06),0_20px 40px -12px rgba(0,0,0,0.5),0_0_0_1px rgba(255,255,255,0.05)] ' +
  'hover:border-white/35 hover:bg-white/[0.12] hover:shadow-[0_4px_0_0_rgba(255,255,255,0.08),0_28px 50px -12px rgba(0,0,0,0.55),0_0_0_1px rgba(255,255,255,0.08)] ' +
  'active:scale-[0.99] active:shadow-[0_2px_0_0_rgba(255,255,255,0.06),0_12px 24px -8px rgba(0,0,0,0.5)] ' +
  'transition-all duration-300 ease-out touch-manipulation min-h-[56px] sm:min-h-[60px]';

export function LinkButton({ item, icon, index }: LinkButtonProps) {
  const isInternal = item.to != null;

  const content = (
    <>
      <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white bg-white/10 border border-white/20 shadow-inner group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-105 transition-all duration-300">
        {icon}
      </span>
      <span className="flex-1 text-left text-sm sm:text-base font-medium tracking-wide text-white/95 group-hover:text-white">
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
