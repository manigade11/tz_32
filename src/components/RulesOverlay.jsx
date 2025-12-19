import { motion, AnimatePresence } from 'framer-motion';

const RulesOverlay = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        background: 'rgba(0,0,0,0.8)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        style={{
                            background: '#0a0a1a',
                            border: '1px solid var(--color-neon-cyan)',
                            padding: '2rem',
                            borderRadius: '16px',
                            maxWidth: '400px',
                            width: '100%',
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 style={{ marginTop: 0, color: 'var(--color-neon-cyan)' }}>MISSION BRIEF</h2>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                            <li>Explore the campus to find QR codes.</li>
                            <li>Each scanner location reveals a part of the <strong style={{ color: '#fff' }}>4-Letter Password</strong>.</li>
                            <li>This is the <strong>Fifth Quantum Node</strong>. Collect them all.</li>
                            <li>Report to the main stage for validation.</li>
                        </ul>
                        <button
                            onClick={onClose}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                marginTop: '1rem',
                                background: 'var(--color-neon-purple)',
                                border: 'none',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            ACKNOWLEDGE
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RulesOverlay;
