import './about.scss';
import { useGlobalContext } from '../GlobalHooks/Context';
import { useEffect, useRef, useState } from 'react';

function About() {
    const {setCursorAction, darkMode} = useGlobalContext();

    const [show, setShow] = useState(false);

    const about = useRef(null);

    useEffect(() => {
        // get limit 
        let limit = about.current.offsetTop;

        window.addEventListener("scroll", () => {
            let pageY = window.scrollY;
            if(pageY > (limit - 300)) {
                setShow(true);
            }
        })

        return () => {
            window.addEventListener("scroll", () => {
                let pageY = window.scrollY;
                if(pageY > (limit - 300)) {
                    setShow(true);
                }
            })
        }
    }, []);

    return <section className={`about container mt-5 ${darkMode ? "darkMode" : null}`} id="about" ref={about}>

        <div className="about-me-board row">

            <figure className={`figure-about col-12 col-md-6 isRevealLeft ${show ? "show" : null}`}
                onMouseEnter={() => setCursorAction("photo")} onMouseLeave={() => setCursorAction("null")}
            ></figure>

            <div className={`about-me-text col-12 col-md-6 text-center text-md-start d-flex flex-column align-items-start justify-content-around isRevealRight ${show ? "show" : null}`}>
                <header className={`about-master ${show ? "show" : null}`}>
                    <h2 className="display-3">About me</h2>
                </header>
                <p className={`lead ${show ? "show" : null}`}>
                    Graduated as a <mark>Mechanical Engineer</mark>, captivated by technology and 
                    ignorant of its operation under the hood, I got intrigued by that fact, and that 
                    alone gave me an adventure to embark on and explore.
                </p>
                <p className={`lead mt-1 ${show ? "show" : null}`}>
                    I have successfully gained some front end skills, with and interest to gain prerequisite 
                    knowledge on the backend, of which I have started to learn <mark>JAVA</mark> programming language. And since I
                    <code> console.log("Hello World!")</code> to the console on my browser. I have the conviction that I belong to this space.
                    {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus adipisci tempore aliquid veritatis fuga tempora 
                    mollitia neque natus optio repellat quas quam veniam, sit, velit, 
                    consequatur eligendi saepe laboriosam officiis! */}
                </p>

                <div className="operations d-flex w-100 justify-content-center justify-content-md-start">
                    <button className="btn btn-info w-auto">Qualifications</button>
                    <button className="btn btn-outline-info w-25 ms-5">Contact</button>
                </div>
            </div>

        </div>

    </section>
}

export default About;