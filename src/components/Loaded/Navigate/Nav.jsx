import navData from "../../../asset/Data/navData"
import './nav.scss';

function Nav() {
    return <nav className="compass nav">
        {
            navData.map(navlink => {
                return <li className="point nav-item nav-link" key={navlink.id}><a href={navlink.title}>{navlink.element}</a></li>
            })
        }
    </nav>
}

export default Nav;