import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../cartwidget/cartWidget';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
    return (
        <div className="navContainer">
            <div>
            </div>
            <div>
                <div>
                    <Link to={'/'}>Tienda</Link>
                </div>
                <div>
                    <Link to={'/'}><FontAwesomeIcon icon={faPaw}/></Link>
                </div>
                <div>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
            <div>
                <div>
                </div>
                <div>
                    <Link to={'/checkout'}><CartWidget/></Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;