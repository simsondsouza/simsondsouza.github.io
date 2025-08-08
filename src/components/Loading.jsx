import styles from "../style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="text-center relative z-10">
        {/* Loading Spinner */}
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-500/30 border-t-blue-500 mx-auto"></div>
          <div className="absolute inset-0 rounded-full h-20 w-20 border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Loading Text */}
        <motion.p 
          className="text-white text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome, Innovator!
        </motion.p>
        <motion.p 
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Exploring My Portfolio...
        </motion.p>
        
        {/* Progress Bar */}
        <motion.div 
          className="w-64 h-1 bg-gray-700 rounded-full mt-8 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
