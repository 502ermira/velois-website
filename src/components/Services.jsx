import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn , textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title, icon, index, description, share}) => {
  return (
    <Tilt className='xs:w-[260px] w-full'>
      <motion.div 
      variants = {fadeIn('right','spring', 0.4*index, 0.5)}
      className='w-full  p-[2px] rounded-t-[20px] shadow-card'>
        <div
        options = {{
          max: 45,
          scale :1,
          speed: 450
        }}
        className='bg-gradient-to-r from-[#270140] via-[#200134] to-[#40003F] rounded-t-[20px] py-5 px-10 h-[275px] flex flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain -ml-5'></img>
          <h3 className='text-white text-[12px] font-semibold text-center mt-5 -ml-5'>{title}</h3>
          <p className='text-[12px] mt-3 -ml-5 '>{description}</p>
          
        </div>
        <div>
        <a href='#work' className='flex items-center text-white text-[12px] font-semibold'> 
        <img src={share} 
          alt='explore_arrow'
          className='h-6 object-contain ml-5 mt-1 mb-1 mr-3'/> See more
        </a>
        </div>

      </motion.div>
    </Tilt>
  )
}

const Service = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Why Choose Us</p>
      <h2 className={styles.sectionHeadText}>Let us be your partner</h2>
    </motion.div>
    <motion.p variants={fadeIn('','',0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      At VELOIS, we are passionate about crafting innovative software solutions that drive digital transformation. With a team of experienced developers and a deep understanding of cutting-edge technologies, we empower businesses to thrive in the digital age. 
      Partner with VELOIS to unlock your digital potential and embark on a transformative journey towards success.
    </motion.p>
    <div className='mt-[39px] flex flex-wrap gap-5'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Service,"services")
