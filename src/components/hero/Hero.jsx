import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
        duration:2,
        repeat:Infinity,
    }
  }
};

const handleClick = () => {
  window.location.href = "https://github.com/Hirankavindu";
}
const handleClick1 = () => {
  window.location.href =
    "https://drive.google.com/drive/folders/1v46kg8XYafUVvT1zGmFi1ET42LwQEbwg?usp=share_link";
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
        repeat:Infinity,
        repeatType:"mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HIRAN WELAGEDARA</motion.h2>
          <motion.h1 variants={textVariants}>
            Developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleClick}>
              My GitHub Account
            </motion.button>
            <motion.button variants={textVariants} onClick={handleClick1}>
              Download CV
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web and Mobile App Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hiran.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
