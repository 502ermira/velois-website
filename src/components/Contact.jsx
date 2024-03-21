import {useState , useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef= useRef();
  const [form,setForm]= useState({
    name:'',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value}=e.target;
    setForm({...form,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'enter-your-serviceID',
      'enter-your-templateID',
      {
        from_name : form.name,
        to_name : 'Company name',
        from_email : form.email,
        to_email : 'EnterYourEmail@gmail.com',
        message : form.message,
      },
      'enter-your-public-key'
    )
    .then(()=> {
      setLoading(false);
      alert ('Your message was sent');
      setForm({
        name: '',
        email: '',
        message : '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    })
  }
  
  return (
    <div className= 'xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden gap-10'>
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}

      className='flex-[0.75] bg-[#270145] bg-opacity-80 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Have a project in mind?</p>
        <h3 className={styles.sectionHeadText}>Contact us.</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='What your name?'
            className='bg-[#170027] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='What your email?'
            className='bg-[#170027] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What do you want to say?'
            className='bg-[#170027] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>
          <button type='submit'
          className='bg-[#170027] py-3 px-8 outline-none font-bold shadow-md w-fit text-white shadow-tertiary rounded-xl'
          > {loading ?  'Sending' : 'Send'}</button>


        </form>

      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,'contact');