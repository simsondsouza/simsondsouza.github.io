import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  BlogPosts,
  Loading,
  Achievements,
} from "./components";
import ProjectDetail from "./components/ProjectDetail";
import { useScrollToTop } from "./lib/useScrollToTop";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-300">{error.message}</p>
        </div>
      </div>
    );
  }

  const MainContent = () => {
    useScrollToTop(true);
    
    return (
      <>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Hero />
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <SkillsAndExperience />
          <Education />
        </div>
        
        <Achievements />
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Projects />
          <BlogPosts enabled={false} />
        </div>
        
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full overflow-hidden min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.section
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              <div className="container mx-auto px-6">
                <Navbar />
              </div>

              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
