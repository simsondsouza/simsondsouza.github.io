import React, { useState, useEffect, useRef } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { achievements } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { motion } from "framer-motion";
import styles from "../style";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardTotalWidth, setCardTotalWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".achievement-card");
        if (card) {
          const cardWidth = card.offsetWidth;
          const cardMargin = parseInt(window.getComputedStyle(card).marginRight, 10);
          setCardTotalWidth(cardWidth + cardMargin);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const handleHorizontalScroll = (event) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += event.deltaX;
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleHorizontalScroll);

      return () => {
        container.removeEventListener("wheel", handleHorizontalScroll);
      };
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isNextDisabled = currentIndex >= achievements.length - 1;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section
      className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      id="achievements"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Achievements
          </h2>
          <p className="section-subtitle">
            Recognition and awards for outstanding performance in academics and professional work.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-8"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} index={index} />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="p-3 bg-glass border border-white/10 rounded-full disabled:opacity-50 hover:bg-glass-hover transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="p-3 bg-glass border border-white/10 rounded-full disabled:opacity-50 hover:bg-glass-hover transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: props.index * 0.1 }}
      className="achievement-card min-w-[300px] max-w-[400px] bg-glass border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            src={props.icon}
            alt={props.event}
            className="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white mb-1">
            {props.event}
          </h3>
          {props.position && (
            <p className="text-blue-400 font-medium">
              {props.position}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {props.content1 && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {props.content1}
          </p>
        )}
        {props.content2 && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {props.content3}
          </p>
        )}
      </div>

      {/* Action Links */}
      <div className="flex gap-3 mt-6">
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <AiFillGithub size={20} />
          </a>
        )}
        {props.youtube && (
          <a
            href={props.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <FaYoutube size={20} />
          </a>
        )}
        {props.article && (
          <a
            href={props.article}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <TiNews size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
