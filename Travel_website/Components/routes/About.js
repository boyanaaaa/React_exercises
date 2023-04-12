import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer"
import AboutUs from "../AboutUs"

function About () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://images.alphacoders.com/103/103593.jpg"
                title="Your Journey Your Story" 
                btnClass="hide"     
            />
            <AboutUs />
            <Footer />
        </>
    )

}

export default About;
