import Form from '../Form/Form';
import './contact.scss';

function Contact() {
    return <section className="contact container-fluid" id="contact">

        <div className="container form-holder d-flex align-items-center flex-column justify-content-center" style={{minHeight: "500px", maxWidth: "400px"}}>
                <h3 className='contact-title text-white' style={{fontFamily: "amaBold"}}>
                    Contact
                </h3>
                <p className="contact-subhead text-white" style={{fontFamily: "amaReg"}}>
                    It's easy, fill the form
                </p>

                <Form />
        </div>

    </section>
}

export default Contact;