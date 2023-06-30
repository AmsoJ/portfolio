import './about.scss';

function About() {
    return <section className="about container mt-5">

        <div className="about-me-board row">

            <figure className="figure-about col-6"></figure>

            <div className="about-me-text col-6 d-flex flex-column align-items-start justify-content-around">
                <header className="about-master">
                    <h2 className="display-3">About me</h2>
                </header>
                <p className="lead" style={{fontSize: "2vw"}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus adipisci tempore aliquid veritatis fuga tempora 
                    mollitia neque natus optio repellat quas quam veniam, sit, velit, 
                    consequatur eligendi saepe laboriosam officiis!
                </p>

                <div className="operations d-flex w-100 justify-content-start">
                    <button className="btn btn-info w-25">Qualifications</button>
                    <button className="btn btn-outline-info w-25 ms-5">Contact</button>
                </div>
            </div>

        </div>

    </section>
}

export default About;