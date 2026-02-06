import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const introTexts = {
    pt: {
    greeting: "Olá! Sou Ana Carolina.",
    bio: "Sou entusiasta da tecnologia como forma de transformação social e atuo como designer UX/UI e desenvolvedora web. Atualmente, contribuo na Datavence e na 1Gov na criação de soluções digitais que geram impacto concreto na política pública e na saúde no Brasil. Acredito na tecnologia orientada por pessoas, valores e propósito.",
    cta: "Vamos criar algo significativo juntos?",
    },
    en: {
    greeting: "Hello! I'm Ana Carolina.",
    bio: "I am an enthusiast of technology as a means for social transformation, working as a UX/UI designer and web developer. Currently, I contribute at Datavence and 1Gov by creating digital solutions that generate tangible impact in public policy and public health in Brazil. I believe in technology guided by people, values, and purpose.",
    cta: "Let’s create something meaningful together?",
    },

};

const HeroModal = ({ isOpen, onClose }: HeroModalProps) => {
  const { language } = useLanguage();
  const content = introTexts[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="glass-card rounded-3xl p-6 md:p-10 max-w-md w-full relative overflow-hidden"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Larger photo */}
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center border-4 border-background shadow-xl overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <img
                    src="assets/img/perfil.png"
                    alt="Perfil"
                    className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Greeting - larger */}
              <motion.h3
                className="text-2xl md:text-3xl font-serif font-medium text-center mb-4 text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {content.greeting}
              </motion.h3>

              {/* Single concise paragraph - larger font */}
              <motion.p
                className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {content.bio}
              </motion.p>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a href="#contact"
                    onClick={(e) => {
                        e.preventDefault()
                        document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                        onClose()
                    }}
                    className="btn-primary inline-block">
                  {content.cta}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeroModal;
