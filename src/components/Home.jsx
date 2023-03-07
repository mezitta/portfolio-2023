import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="load-block-container">
        <div className="load-block" />
      </div>
      <div className="row home-header">
        <div className="col-11">
          <div className="container-fluid">
            <div className="row name-row">Michael Zitta</div>
            <div className="row title-row">Software Developer</div>
          </div>
        </div>
        <div className="col">Links</div>
      </div>

      <div className="home-body">body</div>
      <ProjectLeft />
      <ProjectRight />
      <ProjectLeft />
    </div>
  );
};

export default Home;
