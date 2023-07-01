import navData from "../../../asset/Data/navData"
import './nav.scss';
import { useGlobalContext } from "../GlobalHooks/Context";

function Nav() {
    const {setCursorAction, changeTheme, staticHeader} = useGlobalContext();
    
    return <nav className={`compass nav flex-column justify-content-center flex-md-row ${staticHeader ? "nailed" : null}`}>
        {
            navData.map((navlink, navlinkIndex) => {
                return <li 
                    className="point nav-item nav-link" 
                    key={navlink.id} 
                    onMouseOver={() => {setCursorAction("links");}} 
                    onMouseLeave={() => {setCursorAction("null");}}
                    style={{animationDelay: `.${navlinkIndex + 3}s`}}
                >
                    <a href={`#${navlink.title}`} onClick={e => changeTheme(e)}>
                        {navlink.element}{navlink.title}
                    </a>
                </li>
            })
        }
    </nav>
}

export default Nav;