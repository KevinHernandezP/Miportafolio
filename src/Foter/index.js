import { faGithub,faLinkedin,faTwitterSquare,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Foter = () => {
    return (
        <div className="container my-5" id="footer">
            <footer class="text-center text-white">
                <div class="container pt-4">
                    <section class="mb-4">
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://twitter.com/LuckPlayMc"
                        ><i >  <FontAwesomeIcon icon={faTwitterSquare} size="2x" /></i></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/kevin-hern%C3%A1ndez-0432591b0"
                        ><i >  <FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/LuckplayMc"
                    
                        ><i >  <FontAwesomeIcon icon={faGithub} size="2x" /></i></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="Kevinmusicmc@gmail.com"
                        ><i >  <FontAwesomeIcon icon={faEnvelope} size="2x" /></i></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/luckplaymc"
                        ><i >  <FontAwesomeIcon icon={faInstagram} size="2x" /></i></a>
                    </section>
                </div>

                <div class="text-center text-dark p-3">
                    © 2020 Copyright:
                    <a class="text-dark" href="LuckyCompany.com/">LuckyCompany.com</a>
                </div>
            </footer>
        </div>
    );
}

export default Foter;