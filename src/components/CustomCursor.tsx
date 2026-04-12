import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse coordinates with spring physics for smooth following
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* High-precision Neural Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Delayed Neural Aura */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full blur-xl opacity-40 bg-primary/30"
        animate={{
          width: isHovered ? 80 : 32,
          height: isHovered ? 80 : 32,
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Sampling Frame (Only visible on hover) */}
       <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none border border-primary/50"
        animate={{
          width: isHovered ? 40 : 0,
          height: isHovered ? 40 : 0,
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
