import { useRef } from "react";
import "./feature.scss";
import { motion, useInView } from "framer-motion";

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

const Feature = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="feature"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
       
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          
          <h1>
            <motion.b whileHover={{color:"orange"}}>Initiatives at TCE</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}></motion.b> 
          </h1>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lecture Series</h2>
          <p>
          The lecture series at Thiagarajar College is an enriching platform where experienced entrepreneurs and business professionals share their valuable insights and personal journeys. This series aims to inspire and educate students by providing firsthand accounts of the challenges and successes encountered in the world of startups and business. Through these interactions, attendees gain a deeper understanding of the entrepreneurial mindset, the importance of resilience, and the strategies required to navigate the dynamic business landscape keep it bulletin point 
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>StartUp corner</h2>
          <p>
          "Startup Corner" at Thiagarajar College of Engineering,a space where the spark of innovation meets real-world experience. Here, startup founders and business trailblazers come together to share their stories, not just of success, but of perseverance, grit, and the human spirit that drives them. This isn’t just about business strategies; it’s about the heart and soul of entrepreneurship. Our speakers open up about their personal journeys—the highs, the lows, the lessons learned, and the moments that truly defined them.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Competitions attented</h2>
          <p>
            At Thiagarajar College, we believe that real growth happens outside the classroom. That's why we actively encourage our students to dive into competitions like the Smart India Hackathon and IIT hackathons. These events aren’t just about winning; they’re about challenging ourselves, pushing boundaries, and learning from every experience. When our students participate, they don’t just bring their skills—they bring their passion, creativity, and the drive to solve real-world problems.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mentorship Programme</h2>
          <p>
          Thiagarajar College of Engineering (TCE) offers a comprehensive mentorship program that brings in experienced mentors from diverse fields to guide and inspire students. Through this program, students have the opportunity to learn directly from industry professionals, academics, and successful entrepreneurs who provide valuable insights and real-world knowledge. The mentors engage students in various activities, including workshops, seminars, and interactive sessions, fostering a dynamic learning environment.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Feature;