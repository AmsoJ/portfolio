import './loading.scss';

function Loading() {
    return <section className="loading container-fluid d-flex align-items-center justify-content-center">
        <div className="container load text-center">
            <h1 className="name display-5 text-center">
                Sopuruchukwu Josemaria Ofurum
            </h1>

            <div className="loader">
                <span className="spinner-border text-white"></span>
            </div>
        </div>
    </section>
}

export default Loading;