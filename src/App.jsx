import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuantumBackground from './components/QuantumBackground';
import IntroOverlay from './components/IntroOverlay';
import HeroSection from './components/HeroSection';
import QuantumPage from './components/QuantumPage';
import RulesOverlay from './components/RulesOverlay';
import QuantumCursor from './components/QuantumCursor';
import { quantumData } from './data/quantumData';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [entered, setEntered] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [currentLoc, setCurrentLoc] = useState(1);

  useEffect(() => {
    // Parse location from URL
    const params = new URLSearchParams(window.location.search);
    const loc = parseInt(params.get('loc') || '1');
    setCurrentLoc(loc);
  }, []);

  const pageData = quantumData[currentLoc] || quantumData[1];

  return (
    <>
      <QuantumCursor />
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      <QuantumBackground />

      <AnimatePresence mode="wait">
        {!entered && introDone && (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
            transition={{ duration: 1 }}
          >
            <HeroSection onEnter={() => setEntered(true)} />
          </motion.div>
        )}

        {entered && (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'relative',
              zIndex: 10,
              color: 'white',
              height: '100dvh', // Mobile viewport fix
              overflowY: 'auto',
              overflowX: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
            }}
          >
            <header style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
              position: 'sticky',
              top: 0,
              zIndex: 20,
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                {/* Back Button */}
                <button
                  onClick={() => setEntered(false)}
                  title="Disconnect from Node"
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '1.2rem'
                  }}
                >
                  ←
                </button>

                <div style={{
                  width: '10px', height: '10px',
                  background: pageData.theme.color,
                  borderRadius: '50%',
                  boxShadow: `0 0 10px ${pageData.theme.color}`
                }} />
                <h3 style={{ margin: 0, color: 'white', letterSpacing: '2px', fontSize: '1rem' }}>
                  TECKZITE 2.0
                </h3>
              </div>
              <button
                onClick={() => setShowRules(true)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--color-text-dim)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}>
                MISSION BRIEF
              </button>
            </header>

            {/* Render Specific Page Content */}
            <QuantumPage data={pageData} loc={currentLoc} />

            {/* Rules Overlay */}
            <RulesOverlay isOpen={showRules} onClose={() => setShowRules(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
