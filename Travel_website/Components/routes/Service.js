import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer"
import Trip from "../Trip"


function Service () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://i2.wp.com/www.cleantechloops.com/wp-content/uploads/2019/10/top-travel-agencies-to-work-for.jpg"
                title="Service" 
                btnClass="hide"     
            />
            <Trip />
            <Footer />
        </>
    )

}

export default Service;
