import { motion } from 'framer-motion';

const EnterButton = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            style={{
                background: 'transparent',
                border: '1px solid var(--color-neon-cyan)',
                color: 'var(--color-neon-cyan)',
                padding: '1rem 3rem',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)',
                marginTop: '3rem',
                fontFamily: 'inherit'
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'var(--color-neon-cyan)',
                    opacity: 0,
                    zIndex: -1,
                }}
                whileHover={{ opacity: 0.1 }}
            />
            Enter The Quantum Realm →
        </motion.button>
    );
};

export default EnterButton;
