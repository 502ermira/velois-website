import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { keyMilestones } from '../constants';
import { SectionWrapper } from '../hoc';

const MilestoneCard = ({milestone}) =>(
  <>
  <VerticalTimelineElement

  contentStyle={{ background: 'linear-gradient(to right, #270140, #230134, #40003F)', color: '#fff'}}
  contentArrowStyle={{ borderRight : '20px solid'}}
  date= {milestone.date}
  iconStyle={{ background: '#fff' }}
  icon = {
    <div className="flex justify-center items-center w-full h-full">
      <img src={milestone.icon} alt={milestone.title}
      className="w-[80%] h-[80%] object-contain  contrast-150 brightness-75 "/>
    </div>
  }

  >
    <div>
      <h3 className='text-white text-center font-bold text-[24px] text-lg'>
        {milestone.title}
      </h3>

    </div>
    <p className="mt-5 ml-5 pl-7 text-center text-secondary italic">
      {milestone.description}

    </p>
    
  </VerticalTimelineElement>
  </>

);

const Experience = () => {
  return (
    <>
    <div>
      <p className={styles.sectionSubText}>Company History : Building Excellence through Innovation</p>
      <h2 className={styles.sectionHeadText}>Key Milestones.</h2>
    </div>
    
    <div className="mt-20 flex flex-col">
      
    <VerticalTimeline>
      {keyMilestones.map((milestone, index) => (
      <MilestoneCard key={index} milestone={milestone}/>
      ))}
    </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper (Experience, "work");