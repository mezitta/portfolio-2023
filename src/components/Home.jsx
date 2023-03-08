import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="load-block-container">
        <div className="load-block" />
      </div>
      <div className="row home-header">
        <div className="col-11 header-left">
          <div className="container-fluid home-name">
            <motion.div
              className="row name-row"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
            >
              Michael Zitta
            </motion.div>
            <motion.div
              className="row title-row"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
            >
              Software Developer
            </motion.div>
          </div>
        </div>
        <div className="col">Links</div>
      </div>

      <div className="row home-body">
        <motion.div
          className="col"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
        >
          body
        </motion.div>
      </div>
      <ProjectLeft />
      <ProjectRight />
      <ProjectLeft />
    </div>
  );
};

export default Home;
