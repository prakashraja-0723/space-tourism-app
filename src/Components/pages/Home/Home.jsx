import { Link } from "react-router-dom";
import Header from "../../Templetes/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="home__content">
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <span>SPACE</span>
          <span>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="home__content__cta">
          <Link to="/destination/" className="cta_explore">
            EXPLORE
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
