function Form() {
    return <form className="my-form w-100 p-3 rounded-3 flex-column d-flex">
        <label htmlFor="fullname">
            <small className="labeling">Fullname</small>
            <input 
                type="text" 
                name="fullname"
                placeholder="Your name"
                id="fullname"
                autoComplete="off"
                className="d-block w-100 rounded-5 ps-3"
            />
        </label>

        <label htmlFor="email">
            <small className="labeling">Email</small>
            <input
                type="email"
                name="email"
                placeholder="Your email"
                id="email"
                autoComplete="off"
                className="d-block w-100 rounded-5 ps-3"
            />
        </label>

        <label htmlFor="message">
            <small className="labeling">Leave your message here</small>
            <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="5"
                className="d-block w-100 rounded-4 ps-3"
            />
        </label>

        <button type="submit" className="btn w-100 btn-dark rounded-3">
            Submit
        </button>
    </form>
}

export default Form;