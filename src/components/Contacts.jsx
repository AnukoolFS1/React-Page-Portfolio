import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../Css/contacts.css'

const Contacts = () => {
    let [value, setvalue] = useState('')
    let [value2, setvalue2] = useState('')
    let [value3, setvalue3] = useState('')

    function inputName(e){
        setvalue(e.target.value);
    }

    function inputEmail(e){
        setvalue2(e.target.value);
    }

    function inputMessage(e){
        setvalue3(e.target.value);
    }



    return (
        <section className='Contacts'>
            <div className='headings'>
                <h1 className='home-heading com-h1'>Contact Me {'>'}</h1>
                
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

            {/* <fieldset className='fieldset'>
                <legend className='home-heading ab-h1'>Connect With Me</legend>
                <h1 className='com-h1'>Connet with me</h1>
                <form className='connect-with-me' action='#'>
                    <input type="text" placeholder='Your Name' onChange={inputName} value={value} />
                    <input type="text" placeholder='Your Email' onChange={inputEmail} value={value2} />
                    <textarea type="text" placeholder='Message' onChange={inputMessage} value={value3} rows='10' />
                    <input type="button" value={'submit'} onClick={()=>{setvalue(''); setvalue2(''); setvalue3('')}} />
                </form>
            </fieldset> */}

        </section>
    )
}

export default Contacts