import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion'; // Import Framer Motion
import './services.scss'; // Import the SCSS file
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <div className="services">
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Check </motion.b> out 
            <motion.b whileHover={{ color: 'orange' }}> our</motion.b> magazine.
          </h1>
        </div>
      </motion.div>

      {/* Carousel for images */}
      <div className="carouselContainer">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="assets/Terminal_02_page-0001.jpg" alt="Page 1" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0002.jpg" alt="Page 2" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0003.jpg" alt="Page 3" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0004.jpg" alt="Page 4" />
           
          </div>
          <div>
            <img src="assets/Terminal_02_page-0005.jpg" alt="Page 5" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0006.jpg" alt="Page 6" />
           
          </div>
          <div>
            <img src="assets/Terminal_02_page-0007.jpg" alt="Page 7" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0008.jpg" alt="Page 8" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0009.jpg" alt="Page 9" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0010.jpg" alt="Page 10" />
           
          </div>
          <div>
            <img src="assets/Terminal_02_page-0011.jpg" alt="Page 11" />
           
          </div>
          <div>
            <img src="assets/Terminal_02_page-0012.jpg" alt="Page 12" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0013.jpg" alt="Page 13" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0014.jpg" alt="Page 14" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0015.jpg" alt="Page 15" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0016.jpg" alt="Page 16" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0017.jpg" alt="Page 17" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0018.jpg" alt="Page 18" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0019.jpg" alt="Page 19" />
            
          </div>
          <div>
            <img src="assets/Terminal_02_page-0020.jpg" alt="Page 20" />
            
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;