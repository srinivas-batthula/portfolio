import { motion } from "framer-motion";
import React from "react";

const Star = ({ x, y, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{
                position: "fixed",
                top: `${y}%`,
                left: `${x}%`,
                width: "3px",
                height: "3px",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "0 0 7.1px white",
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',
            }}
        />
    );
};

const ParticlesBackground = () => {
    const numStars = 50; // Number of stars
    const stars = Array.from({ length: numStars }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
    }));

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                // backgroundColor: "linear-gradient(135deg, #9b3b8c, #2c2c2c)",
                overflow: "hidden",
                // zIndex:'-9999',
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',

            }}
        >
            {stars.map((star) => (
                <Star key={star.id} x={star.x} y={star.y} delay={star.delay} />
            ))}
        </div>
    );
};

export default ParticlesBackground;
