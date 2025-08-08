import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  content3,
  content4,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex flex-row p-6 rounded-2xl bg-glass border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
      index === educationList.length - 1 ? "mb-0" : "mb-6"
    }`}
  >
    <div className="relative">
      <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center shadow-lg overflow-hidden">
        <img src={icon} alt="icon" className="w-full h-full object-contain bg-white p-2 rounded-full" />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="flex-1 flex flex-col ml-6">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-2 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 break-words">
        {degree}
      </p>
      <p className="font-poppins font-normal text-gray-400 text-[14px] leading-[30px] mb-3 break-words">
        {duration}
      </p>
      <div className="space-y-2">
        <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px] break-words text-justify">
          ● {content1}
        </p>
        {content2 && (
          <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px] break-words text-justify">
            ● {content2}
          </p>
        )}
        {content3 && (
          <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px] break-words text-justify">
            ● {content3}
          </p>
        )}
        {content4 && (
          <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px] break-words text-justify">
            ● {content4}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Education
          </h2>
          <p className="section-subtitle">
            My academic journey and educational background in robotics and engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Content */}
          <div className="space-y-6">
            {educationList.map((feature, index) => (
              <FeatureCard key={feature.id} index={index} {...feature} />
            ))}
          </div>

          {/* Animation */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-[80%] h-[80%] relative z-[5] animate-scale-in">
                <Lottie {...defaultOptions} />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce-gentle"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              
              {/* Glowing Ring */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
