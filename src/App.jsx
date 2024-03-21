import {BrowserRouter} from 'react-router-dom';
import {Tech, Works, Navbar, Hero, About, Blogs, Services, Experience, Feedbacks, Contact, StarsCanvas,Footer , CarouselCanvas, MeetTheTeam} from './components';
function App() {
 
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-gradient-to-r from-primary via-primary1 to-primary2'>
    <div className='bg-hero-pattern mt-11 sm:mt-3 md:mt-11 bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <div className='relative z-0'>
      <Hero />
      <CarouselCanvas />
      </div>
    </div>
    <About />
    <Services />
    <Tech />
    <MeetTheTeam />
    <Experience />
    <Works />
    <Feedbacks />
    <Blogs />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
