import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroOverlay = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete && onComplete();
        }, 3500); // 3.5s intro
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(20px)' }}
                    transition={{ duration: 1 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#000',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                        transition={{ duration: 1.5, times: [0, 0.6, 1] }}
                        style={{
                            width: '100px',
                            height: '100px',
                            border: '2px solid var(--color-neon-cyan)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px var(--color-neon-cyan)',
                            marginBottom: '2rem',
                            position: 'relative',
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                width: '120%',
                                height: '120%',
                                borderTop: '2px solid var(--color-neon-purple)',
                                borderRadius: '50%',
                            }}
                        />
                        <span style={{ fontSize: '2rem' }}>Q</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, letterSpacing: '20px' }}
                        animate={{ opacity: 1, letterSpacing: '5px' }}
                        transition={{ delay: 1, duration: 1.5 }}
                        style={{
                            color: '#fff',
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                        }}
                    >
                        Initializing Quantum Core...
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay;
