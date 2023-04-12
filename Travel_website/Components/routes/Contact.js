import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer"
import ContactForm from "../ContactForm"


function Contact () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://uploads-ssl.webflow.com/6168ac4b87d78527aba6ecb8/61b7ff77d85b320722e6b4c4_9%20Office%20Design%20Ideas%20to%20Impress%20Your%20Clients.jpg"
                title="Contact" 
                btnClass="hide"     
            />
            <ContactForm />
            <Footer />
        </>
    )

}

export default Contact;
