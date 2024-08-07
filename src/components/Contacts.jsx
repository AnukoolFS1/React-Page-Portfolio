import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../Css/contacts.css'

const Contacts = () => {
    return (
        <section className='Contacts'>
            <div className='headings'>
                <h1 className='home-heading com-h1'>Contact Me</h1>
                
                <ul className="contact-list">
                    <li>
                        <span><FontAwesomeIcon icon={faEnvelope} /> :</span> ascmailing0@gmail.com
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faPhone} /> :</span> 9560095435
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faLocationDot} /> :</span> New Delhi
                    </li>
                </ul>
            </div>

            <fieldset className='fieldset'>
                <legend className='home-heading ab-h1'>Connect With Me</legend>
                <h1 className='com-h1'>Connet with me</h1>
                <form className='connect-with-me'>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                    <textarea type="text" placeholder='Message' rows='10' />
                    <input type="submit" value={'submit'} />
                </form>
            </fieldset>

        </section>
    )
}

export default Contacts