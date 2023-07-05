import './header.scss';
import Nav from '../Navigate/Nav';
import { useGlobalContext } from '../GlobalHooks/Context';
import {AiOutlineMenu} from 'react-icons/ai';
function Header() {
    const {staticHeader, setNavMode, darkMode} = useGlobalContext();

    return <header className={`master container-fluid d-flex justify-content-center align-items-center ${staticHeader ? "nailed" : null} ${darkMode ? "darkMode" : null}`}>
        <Nav />
        <AiOutlineMenu className='menu-open' onClick={() => setNavMode(true)} />
    </header>
}

export default Header;