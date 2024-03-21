import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const TeamCard = ({image, name, role, index}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-gradient-to-r from-[#1e0039] via-[#170027] to-[#0f001a] p-6 rounded-lg text-center shadow-lg"
  >
    <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full mb-4" />
    <h3 className="font-semibold mb-2 text-white text-xl">{name}</h3>
    <p className="text-secondary text-[15px]">{role}</p>
  </motion.div>
  )
}

const MeetTheTeam = () => {
  return (
    <div className="bg-purple-500 bg-opacity-20 py-16 rounded-2xl">
      <div className="container mx-auto">
        <motion.div
          variants={textVariant()}
          className="text-center mb-12"
        >
          <h2 className={`${styles.sectionSubText}`}>Passionate individuals behind our success</h2>
          <p className={`${styles.sectionHeadText}`}>Meet the Team</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 relative">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(MeetTheTeam, 'team');
