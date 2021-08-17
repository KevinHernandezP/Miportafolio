import "./style.css";
import foto from "./components/persfil1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div className="background" id="home">
      <div className="container ">
        <div className="row h-100 ">
          <div className="col-xs-9 col-sm-6 col-lg-6 my-auto">
            <h3>Hello, My Name is Kevin</h3>
            <h1>I'M A WEB DEVELOPER</h1>
            <div className="row justify-content-center">
              <div className="col">


                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://twitter.com/LuckPlayMc" target="_blank" rel="noreferrer"
                ><i >  <FontAwesomeIcon icon={faTwitterSquare} size="2x" /></i></a>

                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://www.linkedin.com/in/kevin-hern%C3%A1ndez-0432591b0/" target="_blank" rel="noreferrer"
                ><i >  <FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a>

                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://github.com/LuckplayMc"target="_blank" rel="noreferrer"

                ><i >  <FontAwesomeIcon icon={faGithub} size="2x" /></i></a>
              </div>
            </div>

            <a href="#aboutme" className="btn btn-primary m-4">Contact Me!</a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6">
            <img src={foto} alt="#" className="img-fluid imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
