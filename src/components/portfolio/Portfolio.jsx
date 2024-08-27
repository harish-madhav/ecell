import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Stake 23",
    img: "stake1.jpg",
    desc: "Stake 23, TCE's pan-institute mock business proposal event, offers students a unique platform to showcase their entrepreneurial skills. As the institution's first-ever mock business expo, Stake 23 encourages participants to present innovative business ideas, simulate real-world challenges, and compete in a dynamic environment that mirrors the corporate world.",
  },
  {
    id: 2,
    title: "CASELABS",
    img: "case1.jpg",
    desc: "E-Cell TCE organized a Business Case Study Competition on September 20th, 2023, aimed at encouraging students to apply their knowledge practically while fostering teamwork and collaboration. The competition provided an opportunity for participants to engage with real-world business challenges, allowing them to sharpen their problem-solving skills and gain valuable insights into practical business scenarios. This event was a significant step in bridging the gap between academic learning and real-world application, preparing students for future professional challenges.",
  },
  {
    id: 3,
    title: "Idea Harvest 24",
    img: "harvest.jpg",
    desc: "In association with TCE-TBI, E Cell organized the Idea Harvest on March 7th, 2024. The event brought together talented participants who presented their innovative business proposals with enthusiasm and creativity. After a thorough evaluation, selected teams were chosen to advance as finalists in the Titan-organized Idea Harvest 2024 at the college level. This initiative not only highlighted the inventive capabilities of our students but also provided them with an excellent opportunity to further develop their ideas on a prestigious platform.",
  },
  {
    id: 4,
    title: "IITM Build Club",
    img: "idea.jpg",
    desc: "The TCE Build Club, an initiative of the IIT Madras Research Park, was launched in collaboration with TCE, Madurai, and the Maxelerator Foundation, Madurai, with the goal of equipping students with the skills to transform ideas into market-ready products. The club was officially inaugurated on September 5th, 2022, by Mr. K. Hari Thiagarajan, Trustee of TCE, Mr. Nanu Sawmy, Founder of Maxelerator Foundation, Dr. M. Palaninatharaja, Principal of TCE, Mr. Pragadhish, 10X Strategy Officer of the IITM Incubation Cell, and Mrs. Naavena Sawmy, Co-founder of Maxelerator Foundation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Events</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;