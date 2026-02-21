import { motion } from "framer-motion";

const Loading = () => (
  <motion.div
    id="loading"
    className="w-full h-screen flex items-center justify-center bg-slate-950"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.2 } }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center space-y-6">
      {/* Spinner */}
      <div className="relative w-16 h-16 mx-auto">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-400 animate-spin" />
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-1"
      >
        <p className="text-white text-xl font-semibold font-poppins">Welcome!</p>
        <p className="text-gray-500 text-sm">Loading portfolio…</p>
      </motion.div>

      {/* Progress bar — duration matches App.jsx 800 ms timer */}
      <motion.div
        className="w-48 h-0.5 bg-white/10 rounded-full mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="h-full bg-teal-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  </motion.div>
);

export default Loading;
