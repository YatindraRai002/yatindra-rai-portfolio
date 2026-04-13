import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity for stretching effect
  const mouseXVelocity = useMotionValue(0);
  const mouseYVelocity = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const prevX = mouseX.get();
      const prevY = mouseY.get();
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Calculate velocity for stretching
      mouseXVelocity.set(e.clientX - prevX);
      mouseYVelocity.set(e.clientY - prevY);

      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* High-precision Neural Core */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.5 : 1,
        }}
      />

      {/* Dynamic Stretching Aura */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full blur-md opacity-40 bg-primary/20"
        animate={{
          width: isHovered ? 60 : 25,
          height: isHovered ? 60 : 25,
          opacity: isHovered ? 0.6 : 0.3,
          backgroundColor: isHovered ? "rgba(139, 92, 246, 0.4)" : "rgba(139, 92, 246, 0.2)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Interaction Frame */}
       <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none border border-primary/50"
        animate={{
          width: isHovered ? 45 : 0,
          height: isHovered ? 45 : 0,
          opacity: isHovered ? 1 : 0,
          rotate: isHovered ? 45 : 0,
          borderRadius: isHovered ? "12px" : "0px",
        }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Pulse Effect on Hover */}
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 border border-primary/20 rounded-full z-[9997] pointer-events-none"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
