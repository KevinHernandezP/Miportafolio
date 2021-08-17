import "./style.css";
import logo from "./Components/prjects.png";
import webdos from "./Components/pagina.gif";

const Works = () => {
  return (
    <div className="background-dos" id="workss">
            <img src={logo} className="img-fluid p-5" alt="logo"></img>

      <div className="container">
    
        <div className="row">
          <div className="col-md-6">
            <img src={webdos} alt="" className="img-fluid pagina-style pl-3" />
          </div>
          <div className="col-md-6 m-auto">
            <div className="texto-aligno">
              <h3 className="text-white">Pizzahoot</h3>
              <p className="text-white">May-07-2021</p>
              <span className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                corrupti quo ipsam vitae maiores recusandae?Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Ullam corrupti quo ipsam
                vitae maiores recusandae?
              </span>

              <div>
                <a href="https://github.com/LuckplayMc/pizza-page" target="_blank" rel="noreferrer" className="btn btn-primary mt-5 miboton">
                  Read more
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Works;
