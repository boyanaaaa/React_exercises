import Navbar from "../Navbar";
import Hero from "../Hero";
import Destination from "../Destination"
import Footer from "../Footer"
import Trip from "../Trip"


function Home () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://i.pinimg.com/originals/00/9e/59/009e59b9df936efc79f2089d55181766.jpg"   
                title="Your Journey Your Story" 
                text="Choose your favorite destination"
                buttonText="Travel Plan"  
                url="/"
                btnClass="show"     
            />

            <Destination />
            <Trip />
            <Footer />
        </>
    )

}

export default Home;
