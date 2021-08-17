import './styles.css';
import skillimg from './Components/skills-img.png';
import bootstrapimg from './Components/bootstrap.svg';
import cssimg from './Components/css.svg';
import figmas from './Components/figma.svg';
import gitimg from './Components/git.svg';
import reactimg from './Components/react.svg';
import sassing from './Components/sass.svg';
import javassc from './Components/javassc.svg';
import htmling from './Components/html.svg';





const Skills = () => {
    return ( 
        <div id="skills">
            <div className="p-5 m-5">
                <img src={skillimg} alt="" className="img-fluid"/>
            </div>
            <div className="container my-auto">
                <div className="row justify-content-center mt-5 m-auto">
                   <div className="row">
                   <div className="col">
                        <img src={htmling} alt=""  />
                    </div>
                    <div className="col">
                        <img src={cssimg} alt=""  />
                    </div>
                     <div className="col">
                        <img src={sassing} alt=""  />
                    </div>
                    <div className="col">
                        <img src={javassc} alt=""  />
                    </div>
                   </div>
                   <div className="row empujar">
                   <div className="col">
                        <img src={reactimg} alt=""  />
                    </div>
                    <div className="col">
                        <img src={gitimg} alt=""  />
                    </div>
                     <div className="col">
                        <img src={bootstrapimg} alt=""  />
                    </div>
                    <div className="col">
                        <img src={figmas} alt=""  />
                    </div>
                   </div>
                </div>
            </div>
           
        
           
        </div>
     );
}
 
export default Skills;