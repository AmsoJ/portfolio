import navData from "../../../asset/Data/navData"
import './nav.scss';
import { useGlobalContext } from "../GlobalHooks/Context";
import {FaWindowClose} from 'react-icons/fa';


function Nav() {
    const {setCursorAction, changeTheme, staticHeader, navMode, setNavMode, darkMode} = useGlobalContext();
    
    return <nav className={`compass nav flex-column justify-content-center flex-md-row ${staticHeader ? "nailed" : null} ${navMode ? "show" : null} ${darkMode ? "darkMode" : null}`}>
        <FaWindowClose className="close-menu" onClick={() => setNavMode(false)} />
        {
            navData.map((navlink, navlinkIndex) => {
                return <li 
                    className="point nav-item nav-link" 
                    key={navlink.id} 
                    onMouseOver={() => {setCursorAction("links");}} 
                    onMouseLeave={() => {setCursorAction("null");}}
                    style={{animationDelay: `.${navlinkIndex + 3}s`}}
                >
                    <a href={`#${navlink.title}`} onClick={e => changeTheme(e)} className="d-flex align-items-center justify-content-center">
                        {navlink.element}{navlink.title}
                    </a>
                </li>
            })
        }
    </nav>
}

export default Nav;