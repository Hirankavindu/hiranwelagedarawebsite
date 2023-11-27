import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Movie Application",
    img: "/public/project1.png",
    desc: "I have developed a mobile application using react native and using TMDB. By using this app we can see the details of the trending movies, Top rated Movies, Acters names and details. This is a cross Platform application. ",
  },
  {
    id: 2,
    title: "NAPOT Application",
    img: "/public/project3.png",
    desc: "I have developed a mobile application called NAPOT for NSBM Green University. I have developed this application using Flutter and Firebase. By using this app NSBM students, Lecturers, Librarian, Canteen Admin, Interviewer can do their day to day works easily.",
  },
  {
    id: 3,
    title: "Intergalactic Application",
    img: "/public/project2.png",
    desc: "We have develop this application Using Next.Js and MongoDB We develop this application for Tech-Triathlon Competition that Organized by RootCode. This application designs as a featuristic design. WE have got the Second Runner Up place in this competition.",
  },
  {
    id: 4,
    title: "KentoVet Application",
    img: "/public/project4.png",
    desc: "I have develop this application using C#, Guna Frame Work and PL SQL. We develop this application for KentoVet Pharmaceutical pvt.LTD for manage their stocks. By using this application they can prediction about future sales and get a clear idea about the stocks.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
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
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
