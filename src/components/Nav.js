import React, { useState } from "react";
import { motion } from "framer-motion";
import "./nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
};
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="inner-nav">
          <ul>
            <motion.li whileTap={{ scale: 0.9 }}>
              <Link
                className="nav-link"
                to="/parallax"
                style={{ textDecoration: "none" }}
                onClick={() => setShow((show) => !show)}
              >
                Parallax
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }}>
              <Link
                className="nav-link"
                to="/draganddrop"
                style={{ textDecoration: "none" }}
                onClick={() => setShow((show) => !show)}
              >
                Drag and Drop
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }}>
              <Link
                className="nav-link"
                to="/wave"
                style={{ textDecoration: "none" }}
                onClick={() => setShow((show) => !show)}
              >
                Wave
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className="toggle"
        onClick={() => setShow((show) => !show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </motion.button>
    </>
  );
};

export default Nav;
