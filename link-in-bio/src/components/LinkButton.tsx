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
  'border-2 border-blue-400/50 bg-gradient-to-br from-blue-950/50 via-blue-900/30 to-blue-950/50 backdrop-blur-xl ' +
  'py-4 sm:py-5 px-5 sm:px-6 font-semibold text-white ' +
  'shadow-[0_4px_0_0_rgba(59,130,246,0.25),0_0_0_1px_rgba(59,130,246,0.25),0_20px_40px_-12px_rgba(0,0,0,0.5)] ' +
  'hover:border-blue-300/80 hover:from-blue-900/60 hover:via-blue-800/45 hover:to-blue-900/60 ' +
  'hover:shadow-[0_8px_0_0_rgba(59,130,246,0.4),0_0_0_2px_rgba(59,130,246,0.5),0_30px_60px_-12px_rgba(0,0,0,0.6),0_0_40px_rgba(37,99,235,0.25)] ' +
  'active:scale-[0.98] active:shadow-[0_2px_0_0_rgba(59,130,246,0.2)] ' +
  'transition-all duration-300 ease-out touch-manipulation min-h-[56px] sm:min-h-[60px]';

export function LinkButton({ item, icon, index }: LinkButtonProps) {
  const isInternal = item.to != null;

  const content = (
    <>
      <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-blue-950 bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-blue-300/60 shadow-[0_4px_0_0_rgba(30,64,175,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:from-blue-300 group-hover:to-blue-400 group-hover:border-blue-200/80 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5),0_6px_0_0_rgba(30,64,175,0.5)] transition-all duration-300">
        {icon}
      </span>
      <span className="flex-1 text-left text-sm sm:text-base font-semibold tracking-wide text-white group-hover:text-blue-50">
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
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97, y: 0 }}
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
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={buttonClass}
        >
          {content}
        </motion.a>
      )}
    </motion.li>
  );
}
