import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import user from "../../resources/characters/user.png";

const Character = ({ initialPosition, className }) => {
  const [position, setPosition] = useState(initialPosition);
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const speed = 5; // Movement speed
      switch (e.key) {
        case "ArrowLeft":
        case "A":
        case "a":
          velocity.current.x = -speed;
          break;
        case "ArrowRight":
        case "D":
        case "d":
          velocity.current.x = speed;
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      velocity.current.x = 0;
    };

    const animate = () => {
      setPosition((prev) => {
        const upperBoundX = initialPosition.x + 100;
        const lowerBoundX = initialPosition.x - 100;
        const screenX = window.innerWidth - 50;
        const maxX = Math.min(upperBoundX, screenX);
        const newX = Math.max(lowerBoundX, Math.min(prev.x + velocity.current.x, maxX));
        return { x: newX, y: initialPosition.y };
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [initialPosition]);

  return (
    <motion.div
      className={`absolute ${className} bg-cover`}
      style={{
        backgroundImage: `url(${user})`,
        bottom: 0, // Keep the character at the bottom
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", duration: 0.05, ease: "linear" }}
    />
  );
};

export default Character;
