import { motion } from 'framer-motion';
import { Tilt } from "react-tilt";
import { cards } from "../constants";
import { fadeIn } from "../utils/motion";
import {right} from '../assets/index';

import {styles} from '../styles';

const HeroCard = ( {index ,image, name, description,id }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-1 w-[250px] object-cover bg-[#30006F] bg-opacity-50
        rounded-t-xl rounded-b-md
        xs:w-[112px] md:w-[250px]'
      >
        <div className='relative w-full h-[160px] xs:h-[70px] md:h-[160px] '>
          <img
            src={image}
            alt='card_image'
            className='w-32 h-32 md:w-32 md:h-32 xs:w-14 xs:h-14 object-cover rounded-t-xl rounded-b-md -mt-16 mx-auto saturate-100 contrast-200'
          />

        </div>
       
        <div className=' text-center rounded-lg -mt-3'>
         <h3 className='text-white font-bold text-[21px] xs:text-[15px]'>{name}</h3>
         <p className='mt-2 text-white font-light text-secondary text-[13px]'>{description}</p>
           <p className='mt-2 text-white font-semibold text-[14px] xs:text-[12px] flex justify-center'>
             <a href={`#${id}`}>
              <img src={right} alt='right-arrow' className='w-7 h-8 xs:w-4 xs:h-5 xs:-ml-1 -ml-4 inline-block' />
              <span className='ml-3 xs:ml-1 text-[12px]'>Explore now</span>
             </a>
           </p>
        </div>

      </Tilt>
    </motion.div>
  );
};


const Hero = () => {
  return (
    <section className='h-screen relative w-full mx-auto'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[55px] max-w-7xl mx-auto flex
      flex-row item-start gap-5`}>
        <div className='pl-20 xs:p-0 md:pl-20'>

        </div>

        <div className='pl-14 xs:p-0 md:pl-14'>
        <h1 className={`${styles.heroHeadText} text-white`}> Collaborate,  Create, Succeed with
        <span className={`${styles.heroHeadingText} text-[#faf]`}>&nbsp;VELOIS</span></h1>
        <p className={`${styles.heroSubText} text-white font-semibold mt-2`}> Experience the power of innovation and elevate your business with VELOIS. </p>
        <div className='mt-20 flex flex-wrap gap-12 xs:gap-6'>
        {cards.map((card, index) => (
          <HeroCard key={`card-${index}`} index={index} {...card} />
        ))}
        </div>
        </div>
      </div>
      


      <div className='absolute bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero