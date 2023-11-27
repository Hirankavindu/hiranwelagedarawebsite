import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hiran Welagedara
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/fb.png" alt="" />
          </a>
          <a href="#">
            <img src="/insta.png" alt="" />
          </a>
          <a href="https://www.behance.net/hirankavindu">
            <img src="/beha.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/hiran-welagedara-ba19a4229">
            <img src="/linked.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar