import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = navLinks.map((link) => link.id);
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waitAndScroll = (sectionId, timeoutMs = 2000) => {
    const start = Date.now();
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        scrollToSection(sectionId);
      } else if (Date.now() - start < timeoutMs) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    if (location.pathname !== "/") {
      navigate("/");
      waitAndScroll(sectionId);
    } else {
      scrollToSection(sectionId);
    }
    setToggle(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-glass-dark/95 backdrop-blur-xl shadow-xl" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => handleNavClick("home")}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity duration-300"
            >
              Portfolio
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(nav.id)}
                  className={`relative px-4 py-2 transition-all duration-300 font-medium group overflow-hidden rounded-lg ${
                    activeSection === nav.id
                      ? "text-white bg-blue-500/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{nav.title}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                      activeSection === nav.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.div className="lg:hidden flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setToggle(!toggle)}
              className="p-3 rounded-xl bg-glass hover:bg-glass-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl"
            >
              <motion.img src={toggle ? close : menu} alt="menu" className="w-6 h-6" animate={{ rotate: toggle ? 180 : 0 }} transition={{ duration: 0.3 }} />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div className="lg:hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl border border-white/10 mt-4 p-6 shadow-2xl">
                <motion.ul className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  {navLinks.map((nav, index) => (
                    <motion.li key={nav.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <button
                        onClick={() => handleNavClick(nav.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                          activeSection === nav.id ? "text-white bg-blue-500/20 border border-blue-500/30" : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="relative z-10">{nav.title}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
