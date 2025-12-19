import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const QuantumCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the trailer
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10); // Center offset
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        // Only enable on devices with a mouse
        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('mousemove', moveCursor);
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Hide on mobile/touch devices
    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: cursorXSpring,
                y: cursorYSpring,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 243, 255, 0.5)',
                background: 'rgba(0, 243, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen'
            }}
        >
            {/* Inner Dot */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '4px',
                height: '4px',
                background: 'white',
                borderRadius: '50%'
            }} />
        </motion.div>
    );
};

export default QuantumCursor;
