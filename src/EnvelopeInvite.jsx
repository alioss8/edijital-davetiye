import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import CoupleNames from "./components/CoupleNames";
import DateInfo from "./components/DateInfo";
import LocationInfo from "./components/LocationInfo";
import { useTheme } from "./context/ThemeContext";
import ReactConfetti from 'react-confetti';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-700 transition-colors"
    >
      Temayı Değiştir
    </button>
  );
};

export default function EnvelopeInvite() {
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [invitationPulled, setInvitationPulled] = useState(false);
  const [envelopeVisible, setEnvelopeVisible] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEnvelopeOpen = () => {
    if (!envelopeOpening) {
      setEnvelopeOpening(true);
      setTimeout(() => {
        setInvitationPulled(true);
        setShowConfetti(true);
        setTimeout(() => {
          setEnvelopeVisible(false);
        }, 2000);
        setTimeout(() => setShowConfetti(false), 3000);
      }, 1000);
    }
  };

  const handleClose = () => {
    setInvitationPulled(false);
    setEnvelopeVisible(true);
    setTimeout(() => {
      setEnvelopeOpening(false);
    }, 500);
  };

  const weddingDate = "2025-08-15T18:00:00";

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-200 relative p-4 sm:p-8 overflow-hidden">
        {showConfetti && (
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            gravity={0.3}
            initialVelocityY={20}
            tweenDuration={100}
          />
        )}
        
        <div className="relative perspective-1000 flex items-center justify-center w-full h-full">
          {/* Zarf */}
        <AnimatePresence>
            {envelopeVisible && (
            <motion.div
                className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[550px] md:h-[350px] cursor-pointer"
                onClick={!envelopeOpening ? handleEnvelopeOpen : undefined}
                initial={{ opacity: 1, scale: 1, y: 0 }}
                animate={envelopeOpening ? {
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                } : {
                  scale: 1
                }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                  y: 200,
                  transition: { 
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Zarf Gövdesi */}
                <div className="absolute inset-0 bg-gray-100 shadow-lg overflow-hidden border border-gray-200">
                  {/* Çiftin Adı */}
                  <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center z-10">
                    <CoupleNames className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 text-center px-4" />
                  </div>
              </div>

                {/* Zarf Kapağı - Tek Üçgen */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[50%] bg-gray-100 z-20 border border-gray-200"
                  style={{
                    transformOrigin: "top",
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={envelopeOpening ? {
                    rotateX: 160,
                    transition: { 
                      type: "spring",
                      stiffness: 40,
                      damping: 15,
                      duration: 1.2
                    }
                  } : {
                    rotateX: 0,
                    transition: { 
                      type: "spring",
                      stiffness: 40,
                      damping: 15,
                      duration: 0.8
                    }
                  }}
                >
                  {/* Kapak Gölgesi */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200" />
                </motion.div>

                {/* Alt Gölge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[98%] h-4 bg-black opacity-5 blur-sm" />
            </motion.div>
          )}
        </AnimatePresence>

          {/* Tam Davetiye */}
          {invitationPulled && (
            <motion.div
              className="fixed inset-0 w-full h-full"
              style={{ 
                originY: 1,
                transformStyle: "preserve-3d",
                zIndex: 50
              }}
              initial={{ 
                y: 200,
                scale: 0.8,
                opacity: 0,
                rotateX: 10
              }}
              animate={{ 
                y: 0,
                scale: 1,
                opacity: 1,
                rotateX: 0,
                transition: { 
                  type: "spring",
                  stiffness: 20,
                  damping: 8,
                  duration: 1.5,
                  delay: 0.5
                }
              }}
            >
              <motion.div 
                className="bg-white w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 transform-gpu"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    delay: 0.8
                  }
                }}
              >
                <motion.div 
                  className="text-center space-y-2 sm:space-y-3 max-w-4xl w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      duration: 0.5
                    }
                  }}
                >
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-rose-300 rounded-full" />
                    <CoupleNames className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-1 sm:mb-2 font-serif" />
                    <p className="text-rose-500 italic text-lg sm:text-xl">Düğün Davetiyesi</p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-3 sm:p-4 rounded-xl mt-2 sm:mt-3 mb-2 sm:mb-3 bg-gradient-to-r from-rose-50 to-purple-50 border border-rose-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <DateInfo targetDate={weddingDate} className="text-lg sm:text-xl" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <LocationInfo className="text-base sm:text-lg text-gray-700" />
                    <ThemeSwitcher />
                  </motion.div>

                  <motion.button
                    onClick={handleClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-rose-500 text-white rounded-xl shadow-lg hover:bg-rose-600 transition-colors text-lg sm:text-xl"
                  >
                    Zarfı Kapat
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
