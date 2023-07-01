import './about.scss';
import { useGlobalContext } from '../GlobalHooks/Context';
import { useEffect, useRef, useState } from 'react';

function About() {
    const {setCursorAction} = useGlobalContext();

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

    return <section className="about container mt-5" id="about" ref={about}>

        <div className="about-me-board row">

            <figure className={`figure-about col-12 col-md-6 isRevealLeft ${show ? "show" : null}`}
                onMouseEnter={() => setCursorAction("photo")} onMouseLeave={() => setCursorAction("null")}
            ></figure>

            <div className={`about-me-text col-12 col-md-6 text-center text-md-start d-flex flex-column align-items-start justify-content-around isRevealRight ${show ? "show" : null}`}>
                <header className={`about-master ${show ? "show" : null}`}>
                    <h2 className="display-3">About me</h2>
                </header>
                <p className={`lead ${show ? "show" : null}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus adipisci tempore aliquid veritatis fuga tempora 
                    mollitia neque natus optio repellat quas quam veniam, sit, velit, 
                    consequatur eligendi saepe laboriosam officiis!
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