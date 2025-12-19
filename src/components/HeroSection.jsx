import { motion } from 'framer-motion';
import EnterButton from './EnterButton';

const HeroSection = ({ onEnter }) => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            position: 'relative',
            zIndex: 10
        }}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <h2 style={{
                    color: 'var(--color-neon-purple)',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                    fontSize: '1rem'
                }}>
                    COLLEGE TECH FEST
                </h2>
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    margin: 0,
                    background: 'linear-gradient(to bottom, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 20px rgba(0,243,255,0.3))'
                }}>
                    TECKZITE 2.0
                </h1>
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                        marginTop: '1rem',
                        fontSize: '1.2rem',
                        color: 'var(--color-text-dim)'
                    }}
                >
                    Welcome to the Quantum World
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <EnterButton onClick={onEnter} />
            </motion.div>
        </div>
    );
};

export default HeroSection;
