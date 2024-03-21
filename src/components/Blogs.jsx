import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { articles } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { right } from '../assets';

import { styles } from '../styles';

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gradient-to-r from-[#1e0039] via-[#170027] to-[#0f001a] p-1 rounded-3xl xs:w-[320px] w-full ">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-3">
        <h3 className="font-bold mb-2 text-white text-[15px] text-center">{title}</h3>
        <p className="text-secondary text-[14px]">{description}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const numArticles = articles.length;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % numArticles);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + numArticles) % numArticles);
  };

  return (
    <div className="mt-12 bg-[#9c90c1] bg-opacity-10 rounded-[20px]">
      <div className={`${styles.padding} bg-purple-800 bg-opacity-20 rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More from us</p>
          <h2 className={styles.sectionHeadText}>Latest Blog Posts.</h2>
        </motion.div>
      </div>
      <div className={`relative overflow-hidden ${styles.paddingX} ml-1 -mt-20 pb-14 flex flex-wrap gap-7 `}>
        {articles.slice(startIndex, startIndex + 3).map((article, index) => (
          <BlogCard key={article.title} {...article} />
        ))}
       
        <button className="absolute top-1/2 left-[2px] transform -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-3" onClick={prevSlide}>
          <img src={right} alt='right-arrow' className='w-8 h-9 rotate-180' />
        
        </button>
        <button className="absolute top-1/2 right-[5px] transform -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-3" onClick={nextSlide}>
        <img src={right} alt='right-arrow' className='w-8 h-9' />
        </button>
        
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, '');
