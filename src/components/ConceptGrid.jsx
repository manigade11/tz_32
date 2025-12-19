import { motion } from 'framer-motion';

const concepts = [
    {
        title: 'Superposition',
        desc: 'A system existing in multiple states at once.',
        icon: '⚛️'
    },
    {
        title: 'Entanglement',
        desc: 'Particles linked across vast distances.',
        icon: '🔗'
    },
    {
        title: 'Tunneling',
        desc: 'Passing through barriers essentially impossible.',
        icon: '🚇'
    },
    {
        title: 'Qubit',
        desc: 'The fundamental unit of quantum info.',
        icon: '💠'
    }
];

// Special component for the Hidden Letter
const HiddenLetterCard = () => {
    // Logic: Check URL param 'code' or 'loc' to decide which letter.
    const params = new URLSearchParams(window.location.search);
    const loc = params.get('loc') || '1';

    const letterMap = {
        '1': 'S',
        '2': 'U',
        '3': 'P',
        '4': 'E',
        '5': 'R',
        'default': '?'
    };

    const letter = letterMap[loc] || letterMap['default'];

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 243, 255, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                minHeight: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 243, 255, 0.1)'
            }}
        >
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(188, 19, 254, 0.1), transparent)'
                }}
            />

            <h2 style={{ fontSize: '3rem', margin: 0, color: '#fff', textShadow: '0 0 15px var(--color-neon-purple)' }}>
                <span style={{ color: 'var(--color-neon-purple)' }}>{letter}</span>
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', marginTop: '0.5rem' }}>
                ANOMALY DETECTED
            </p>
        </motion.div>
    );
};

const ConceptGrid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            width: '100%'
        }}>
            {concepts.map((c, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        minHeight: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: 'var(--color-neon-cyan)' }}>{c.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                        {c.desc}
                    </p>
                </motion.div>
            ))}

            {/* Insert Hidden Letter Card mixed in */}
            <HiddenLetterCard />
        </div>
    );
};

export default ConceptGrid;
