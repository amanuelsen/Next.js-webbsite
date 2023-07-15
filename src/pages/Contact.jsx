import Hero from "./components/hero";
import Contactform from "./components/Contact";
const Contact=()=>{
    return(
        <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contactform/>
    </div>
    )
}

export default Contact;