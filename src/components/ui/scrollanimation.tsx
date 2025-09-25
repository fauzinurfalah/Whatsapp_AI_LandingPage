"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import React from 'react';

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 }, 
          visible: { opacity: 1, x: 0 },  
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
