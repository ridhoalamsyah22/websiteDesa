import Hero from './Hero';
import News from './News';
import Gallery from './Gallery';
import { useColorModeValue } from '@chakra-ui/react';
import PotensiDesa from './potensiDesa';
import Location from './Location';
import About from './About';
import Jumbotron from './Jumbotron';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Profil from './Profil';


const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi
    });
  }, []);

  return (
    <>
      <Hero />
      <div className="container mx-auto p-4" style={{ backgroundColor: bgColor }}>
        <div data-aos="fade-up">
          <About/>
        </div>
        <div data-aos="fade-up">
          <News />
        </div>
        <div data-aos="fade-down">
          <Profil />
        </div>
        <div data-aos="fade-up">
          <Jumbotron/>
        </div>
        <div data-aos="fade-up">
          <Gallery />
        </div>
        <div data-aos="fade-up">
          <PotensiDesa />
        </div>
        <div data-aos="fade-up">
          <Location/>
        </div>
      </div>
    </>
  );
};

export default Home;