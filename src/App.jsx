import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  /* ExtraCurricular, */ // Commented out ExtraCurricular
  Footer,
  /* OpenSource, */ // Commented out OpenSource
  Projects,
  BlogPosts,
  Loading,
  Achievements,
} from "./components";
import ProjectDetail from "./components/ProjectDetail"; // Add this import for the project detail page

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <AnimatePresence>
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.section
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>

              {/* Define Routes here */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div className={`bg-primary ${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                          <Hero />
                        </div>
                      </div>

                      <div
                        className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
                      >
                        <div className={`${styles.boxWidth}`}>
                          <SkillsAndExperience />
                          <Education />
                        </div>
                      </div>
                      <Achievements />
                      <div
                        className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
                      >
                        <div className={`${styles.boxWidth}`}>
                          <Projects /> {/* This will show the projects */}
                          <BlogPosts enabled={false} />
                          {/* <OpenSource /> */} {/* Commented out OpenSource */}
                          {/* <ExtraCurricular /> */} {/* Commented out ExtraCurricular */}
                        </div>
                      </div>
                      <Footer />
                    </>
                  }
                />

                {/* ProjectDetail route */}
                <Route path="/projects/:id" element={<ProjectDetail />} />
              </Routes>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
