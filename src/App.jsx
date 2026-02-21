import React, { useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  Loading,
  Achievements,
  Publications,
  News,
} from "./components";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

// Instantly resets scroll on every route change, overriding CSS scroll-behavior: smooth
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const MainContent = () => (
  <>
    <div className="bg-slate-950">
      <Hero />
    </div>

    <div className="bg-slate-950">
      <News />
      <SkillsAndExperience />
      <Education />
    </div>

    <Achievements />

    <div className="bg-slate-950">
      <Projects />
      <Publications />
    </div>

    <Footer />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-950 w-full overflow-hidden min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.section
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="container mx-auto px-6">
                <Navbar />
              </div>

              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
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
