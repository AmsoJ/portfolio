import './header.scss';
import Nav from '../Navigate/Nav';
import { useGlobalContext } from '../GlobalHooks/Context';
import { FaHamburger, Me } from 'react-icons/fa';

function Header() {
    const {staticHeader} = useGlobalContext();

    return <header className={`master container-fluid d-flex justify-content-center ${staticHeader ? "nailed" : null}`}>
        <Nav />
        <FaHamburger className='menu-open' />
    </header>
}

export default Header;