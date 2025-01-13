import styles from "../style";
import { motion } from "framer-motion";
//import { portfolioicon } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* <img src={portfolioicon} alt="Simson D'Souza" className="w-[80px] h-[80px]" /> */}
      <p className="text-white text-1xl font-bold">
      Welcome, Innovator! Explore My Work
      </p>
    </motion.div>
  );
};

export default Loading;
