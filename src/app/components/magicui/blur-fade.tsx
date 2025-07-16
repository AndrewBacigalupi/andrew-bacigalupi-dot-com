"use client";
import { motion } from "framer-motion";

export default function BlurFade({ children, delay = 0, className = '', yOffset = 16 }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 