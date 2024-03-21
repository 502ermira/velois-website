import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';

const Tech = () => {
  return (
    <div className={`${styles.sectionSubText}`}>Take a look at the technologies we use!
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-14'>
      {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, '');