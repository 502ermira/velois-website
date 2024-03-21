import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gradient-to-r from-[#270140] via-[#200134] to-[#40003F] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-xl contrast-100'
          />

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[21px] text-center'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
        </div>

        <div className='mt-3 flex flex-wrap gap-2 font-semibold'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>See What We've Been Up To: </p>
        <h2 className={`${styles.sectionHeadText}`}>Recent Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Experience the breadth of our expertise and creativity through our recently completed projects.
          Each project showcases our commitment to excellence, attention to detail, and passion for crafting tailored solutions that meet our clients' unique needs. 
          Explore our portfolio to get a glimpse of our capabilities and the remarkable outcomes we've achieved.
        </motion.p>
      </div>

      <div className='mt-[47px] flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");