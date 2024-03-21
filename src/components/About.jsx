import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineRocket, AiOutlineTeam } from 'react-icons/ai';
import { about } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const iconComponents = {
  FaRegLightbulb: FaRegLightbulb,
  AiOutlineCode: AiOutlineCode,
  AiOutlineTeam: AiOutlineTeam,
  AiOutlineRocket: AiOutlineRocket
};

const AboutCard = ({ title, description, icon }) => {
  const IconComponent = iconComponents[icon];
  if (!IconComponent) return null;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-[#1e0039] via-[#170027] to-[#0f001a] p-8 rounded-lg shadow-md flex items-center justify-center transform hover:shadow-xl transition duration-300"
    >
      <IconComponent className="w-12 h-12 text-white mr-4" />
      <div className="p-3">
        <h3 className="font-semibold mb-2 text-white text-xl">{title}</h3>
        <p className="text-secondary text-[15px]">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="mt-12 bg-purple-500 bg-opacity-20 rounded-3xl">
      <div className={`${styles.padding} bg-transparent rounded-3xl min-h-[300px] overflow-hidden relative z-10`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Learn about us</p>
          <h2 className={styles.sectionHeadText}>Our Thoughts & Ideas.</h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 -mt-20 pb-14 mx-10 z-20 relative">
        {about.map((section, index) => (
          <AboutCard key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
