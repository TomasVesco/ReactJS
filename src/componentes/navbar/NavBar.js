import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import CartWidget from '../cartwidget/cartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navContainer">
        <div>
        </div>
        <div>
            <div>
                <Link to={'/ReactJS'}>Tienda</Link>
            </div>
            <div>
                <Link to={'/ReactJS'}><FontAwesomeIcon icon={faPaw}/></Link>
            </div>
            <div>
                <Link to={'/Login'}>Login</Link>
            </div>
        </div>
        <div>
            <div>
            </div>
            <div>
                <Link to={'/Cart'}><CartWidget/></Link>
            </div>
            <div>
            </div>
        </div>
    </div>
    );
}

export default NavBar;