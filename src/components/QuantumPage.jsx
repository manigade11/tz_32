import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuantumPage = ({ data, loc }) => {
    const [mcqSolved, setMcqSolved] = useState(false);
    const [showReveal, setShowReveal] = useState(false); // Controls overlay visibility
    const [selectedOpt, setSelectedOpt] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMcqSubmit = (optId) => {
        setSelectedOpt(optId);
        if (optId === data.mcq.correctId) {
            setIsCorrect(true);
            setTimeout(() => {
                setMcqSolved(true);
                setShowReveal(true); // Trigger overlay
            }, 1500); // Delay to show success state
        } else {
            setIsCorrect(false);
            setTimeout(() => {
                setSelectedOpt(null);
                setIsCorrect(null);
            }, 1000); // Reset after shake
        }
    };

    return (
        <div style={{
            padding: '1.5rem', // Reduced side padding for mobile
            paddingBottom: '8rem', // Extra space at bottom to ensure scrolling past the last element
            maxWidth: '800px',
            margin: '0 auto',
            color: 'white',
            position: 'relative',
            width: '100%'
        }}>
            {/* Title Section */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <div style={{
                    fontSize: '0.9rem',
                    color: data.theme.color,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                }}>
                    QUANTUM NODE 1
                </div>
                <h1 style={{
                    fontSize: '2.5rem',
                    margin: 0,
                    textShadow: `0 0 20px ${data.theme.color}`
                }}>
                    {data.title.main}
                </h1>
                <p style={{ color: 'var(--color-text-dim)', fontStyle: 'italic' }}>
                    {data.title.sub}
                </p>
            </motion.div>

            {/* Content Section */}
            {/* Content Sections */}
            <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                {data.sections && data.sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial="idle"
                        whileHover={!isMobile ? "hover" : undefined} // Disable hover effect on mobile
                        animate="idle"
                        variants={{
                            idle: {
                                scale: 1,
                                boxShadow: '0 0 0px rgba(0,0,0,0)',
                                borderColor: 'rgba(255,255,255,0.1)'
                            },
                            hover: {
                                scale: 1.02,
                                boxShadow: `0 0 30px ${data.theme.color}40`,
                                borderColor: data.theme.color
                            }
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            textAlign: 'left',
                            cursor: isMobile ? 'default' : 'default', // Consistent cursor
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Hover Background Image */}
                        {section.bgImage && (
                            <motion.div
                                variants={{
                                    idle: { opacity: isMobile ? 0.3 : 0 }, // Slightly visible on mobile? Or keep hidden? Let's keep distinct.
                                    hover: { opacity: 0.6 }
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${section.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 0,
                                    filter: 'brightness(0.6)'
                                }}
                            />
                        )}

                        {/* Content Container (z-index to stay above bg) */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{
                                margin: 0,
                                fontSize: '1.5rem',
                                color: data.theme.color,
                                borderBottom: `1px solid ${data.theme.color}40`,
                                paddingBottom: '0.5rem'
                            }}>
                                {section.heading}
                            </h2>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '1rem' }}>
                                {/* Visual Indicator */}
                                <div style={{
                                    minWidth: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, ${data.theme.color}, transparent)`,
                                    opacity: 0.6,
                                    marginTop: '0.2rem'
                                }} />

                                <motion.p
                                    variants={{
                                        idle: {
                                            opacity: isMobile ? 1 : 0,
                                            filter: isMobile ? 'blur(0px)' : 'blur(5px)',
                                            y: isMobile ? 0 : 10
                                        },
                                        hover: { opacity: 1, filter: 'blur(0px)', y: 0 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                    style={{ fontSize: '1rem', color: 'var(--color-text-dim)', margin: 0, lineHeight: 1.6 }}
                                >
                                    {section.content}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MCQ Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <h3 style={{ borderLeft: `3px solid ${data.theme.color}`, paddingLeft: '1rem' }}>
                    QUANTUM CHALLENGE
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>{data.mcq.question}</p>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {data.mcq.options.map(opt => (
                        <motion.button
                            key={opt.id}
                            onClick={() => handleMcqSubmit(opt.id)}
                            disabled={mcqSolved}
                            whileHover={!mcqSolved ? { scale: 1.02, x: 10, borderColor: data.theme.color, boxShadow: `0 0 10px ${data.theme.color}20` } : {}}
                            whileTap={!mcqSolved ? { scale: 0.98 } : {}}
                            animate={
                                selectedOpt === opt.id
                                    ? {
                                        backgroundColor: isCorrect
                                            ? 'rgba(0, 255, 0, 0.2)'
                                            : isCorrect === false
                                                ? 'rgba(255, 0, 0, 0.2)'
                                                : 'rgba(255, 255, 255, 0.1)',
                                        borderColor: isCorrect
                                            ? '#00ff00'
                                            : isCorrect === false
                                                ? '#ff0000'
                                                : data.theme.color
                                    }
                                    : { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }
                            }
                            style={{
                                background: 'none',
                                border: '1px solid',
                                padding: '1rem',
                                borderRadius: '8px',
                                color: 'white',
                                textAlign: 'left',
                                cursor: mcqSolved ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span style={{
                                color: data.theme.color,
                                fontWeight: 'bold',
                                fontFamily: 'monospace'
                            }}>
                                [{opt.id}]
                            </span>
                            {opt.text}
                        </motion.button>
                    ))}
                </div>

                {mcqSolved && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{
                            marginTop: '2rem',
                            padding: '1rem',
                            border: `1px dashed ${data.theme.color}`,
                            borderRadius: '8px',
                            color: data.theme.color,
                            background: 'rgba(0,0,0,0.3)'
                        }}
                    >
                        <strong>System Update:</strong> {data.mcq.successMsg}
                    </motion.div>
                )}
            </motion.div>

            {/* Persistent Clue Button (Visible when solved but overlay is closed) */}
            {mcqSolved && !showReveal && (
                <motion.button
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        rotate: 0,
                        boxShadow: `0 0 20px ${data.theme.color}40`
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: `0 0 50px ${data.theme.color}, 0 0 100px ${data.theme.color}50`,
                        borderColor: '#ffffff',
                        background: 'rgba(0,0,0,1)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={() => setShowReveal(true)}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '70px', // Slightly larger
                        height: '70px',
                        borderRadius: '50%',
                        background: `rgba(0,0,0,0.8)`,
                        border: `2px solid ${data.theme.color}`,
                        color: data.theme.color,
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        zIndex: 90,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        outline: 'none'
                    }}
                >
                    {data.hiddenLetter.char}
                </motion.button>
            )}

            {/* Hidden Letter Reveal - Centered Overlay */}
            <AnimatePresence>
                {showReveal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowReveal(false)} // Close on click
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 100, // Higher than header
                            background: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 12 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close if clicking content? Or let it close anywhere? Probs anywhere is better for mobile.
                            style={{
                                textAlign: 'center',
                                border: `2px solid ${data.theme.color}`,
                                borderRadius: '20px',
                                padding: '3rem',
                                background: 'rgba(0,0,0,0.8)', // slightly darker bg for contrast
                                boxShadow: `0 0 50px ${data.theme.color}50`,
                                maxWidth: '90%' // Ensure it doesn't touch edges on small screens
                            }}
                        >
                            <h3 style={{
                                color: data.theme.color,
                                letterSpacing: '2px',
                                marginTop: 0,
                                marginBottom: '1rem',
                                textTransform: 'uppercase'
                            }}>
                                QUANTUM NODE 1
                            </h3>

                            <motion.div
                                animate={{
                                    textShadow: [`0 0 20px ${data.theme.color}`, `0 0 50px ${data.theme.color}`, `0 0 20px ${data.theme.color}`],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    fontSize: data.hiddenLetter.char.length > 1 ? '4rem' : '6rem', // Adjust size for words
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'sans-serif',
                                    lineHeight: 1,
                                    marginBottom: '1rem'
                                }}
                            >
                                {data.hiddenLetter.char}
                            </motion.div>

                            <p style={{
                                color: 'white',
                                fontSize: '1.2rem',
                                opacity: 0.9,
                                maxWidth: '300px',
                                lineHeight: '1.5'
                            }}>
                                {data.hiddenLetter.hint}
                            </p>

                            <div style={{
                                marginTop: '2rem',
                                fontSize: '0.8rem',
                                color: 'var(--color-text-dim)'
                            }}>
                                (Tap anywhere to close)
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuantumPage;
