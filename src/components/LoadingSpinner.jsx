import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear'
    }
  }
};

const LoadingSpinner = () => {
  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: '5px solid rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #3498db',
        borderRadius: '50%',
        margin: 'auto'
      }}
      variants={spinnerVariants}
      animate="animate"
    />
  );
};

export default LoadingSpinner;
