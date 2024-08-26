import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div className="contentWrapper">
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "Vision" : "What We Do?"}
        </motion.h1>
        
        {type === "services" && (
          <motion.p style={{ y: yText }}>
            The Entrepreneurship Cell (E-Cell) at TCE is an organization that serves as TCE Madurai's conduit to the world of business and entrepreneurship. Our function on the outside is to network and cultivate relationships that help us contribute positively to society by means of entrepreneurial activities.
          </motion.p>
        )}

        {type !== "services" && (
          <motion.p style={{ y: yText }}>
            We expose the students of TCE Madurai to the inany facets of business and entrepreneurship, and help them become competent leaders, dynamic entrepreneurial thinkers and overall, individuals that add value to their environment in their own different ways.
          </motion.p>
        )}
      </div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
