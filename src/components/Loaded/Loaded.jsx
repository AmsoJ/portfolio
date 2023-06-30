import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import './loaded.scss';

function Loaded() {
    return <section className="loaded container-fluid p-0">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </section>

}

export default Loaded;