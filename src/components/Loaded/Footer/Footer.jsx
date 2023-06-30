import './footer.scss';
import footerdata from '../../../asset/Data/footerdata';
function Footer() {
    return <footer className="page-end d-flex align-items-center justify-content-center">
        <nav className="nav">
            {
                footerdata.map(contactLink => {
                    return <li className="nav-link nav-item" key={contactLink.id}>
                        <a href={contactLink.href} target='_blank' rel="noreferrer">
                            {contactLink.element}
                        </a>
                    </li>
                })
            }
        </nav>
    </footer>
}

export default Footer;