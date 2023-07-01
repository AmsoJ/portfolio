// import { useEffect } from 'react';
import useCursorEffect from './GlobalHooks/Effects';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import './loaded.scss';
import { useGlobalContext } from './GlobalHooks/Context';

function Loaded() {
    const {cursorAction, darkMode} = useGlobalContext();
    useCursorEffect();
    return <section className={`loaded container-fluid p-0 ${darkMode ? "darkmode" : null}`}>
        <span className={`cursor ${cursorAction} rounded-circle`}></span>
        <span className={`cursor ${cursorAction} rounded-circle`}></span>
        <span className={`cursor ${cursorAction} rounded-circle`}></span>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </section>

}

export default Loaded;