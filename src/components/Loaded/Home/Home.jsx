import Header from "../Header/Header";
// import profilePic from './../../../asset/images/profilepic.png';
import './home.scss';

function Home() {
    return <section className="home container-fluid p-0">
        <Header />

        <div className="introduction container mt-4 text-center p-3">
            <div className="profile-image mx-auto shadow-lg rounded-circle" style={{width: "250px", aspectRatio: "1/1"}}></div>
            
            <p className="greeting lead m-0 mt-3">Hello, I'm</p>

            <div className="name">
                <h1 className="fullname">Josemaria Ofurum</h1>
            </div>

            <p className="about-me mx-auto" style={{maxWidth: "700px"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, atque. Quis omnis deleniti, eveniet laborum temporibus veniam praesentium non doloribus voluptas earum voluptatum veritatis, error architecto nobis maxime, odio voluptates.
            </p>
        </div>
    </section>
}

export default Home;