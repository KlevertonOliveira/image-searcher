import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

function AnimatedPage({ children }: { children: ReactNode; }) {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;