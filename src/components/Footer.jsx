import '../Css/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook, 
    faInstagram, 
    faLinkedin, 
    faTwitter 
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="">
            <section className="icons"> 
                <span title='Facebook'><FontAwesomeIcon icon={faFacebook} /></span>
                <span title='Instagram'><FontAwesomeIcon icon={faInstagram} /></span>
                <span title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} /></span>
                <span title='Twitter'><FontAwesomeIcon icon={faTwitter} /></span>
            </section>
            <p>Connect with me on the social media</p>
        </footer>
    )
}

export default Footer