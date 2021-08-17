import './style.css';
import fotoperfil from "./components/foto.png"
import AboutMe from "./components/about-me.png"
const About = () => {
    return (
        <div className="background-dos" id="aboutme">
            <div className="container">
                <div>
                <img src={AboutMe} alt="" className="img-fluid mt-5" />

                </div>
                <div className="row p-3">
                    
                    <div className="col-md-6 p-4">
                        <img src={fotoperfil} alt="" className="img-fluid foto-dos" />


                    </div>
                    <div className="col-md-6 texto ">
                        <h1 className="text-white texto-dos">I'm Kevin Hernandez</h1>
                        <span className="text-primary texto-dos mt-4">I´am a Front-end Developer</span>
                        <p className="text-white texto-tres">I am a freelancer based in Mexico city and i have been building noteworthy websites for years.
                            For this time i've done all types of projects.
                            I help convert a vision and an idea into meaningful and useful products.
                            Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                            If you're interested in working with me, don't hesitate to hire me.</p>

                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <strong className="text-white">Name:</strong><p className="text-white">Kevin Hernandez</p>
                                <strong className="text-white">Email:</strong> <a href="#aboutme">Kevinmusicmc@gmail.com</a>
                            </div>
                            <div className="col-md-6 m-auto">
                                <strong className="text-white">Age:</strong><p className="text-white">23 Years old</p>
                                <strong className="text-white">From:</strong><p className="text-white">Ciudad de Mexico</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <a href="https://drive.google.com/file/d/1uCar14XsFTxO3_bqe0j2KnDc_npKLIzI/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary botones">Download Cv</a>
                                <a href="#workss" className="btn bg-white pr-5" >My Works</a>

                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;