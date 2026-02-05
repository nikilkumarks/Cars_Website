import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest("a, button, select, input")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="cursor-dot hidden lg:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: isHovering ? 0 : 1,
                }}
            />
            <motion.div
                className="cursor-outline hidden lg:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(249, 115, 22, 0.1)" : "transparent",
                    borderColor: isHovering ? "rgba(249, 115, 22, 1)" : "rgba(249, 115, 22, 0.5)",
                }}
            />
        </>
    );
};

export default CustomCursor;
