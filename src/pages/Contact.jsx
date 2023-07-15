import Hero from "./components/hero";
import Contact from './components/Contact'
const contact = () => {
  return (
    <div id="contact">
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
    </div>
  )
}

export default contact;