import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import CartWidget from '../cartwidget/cartWidget';

const NavBar = () => {
    return (
        <div className="navContainer">
            <div>
            </div>
            <div>
                <div>
                    <a href="/#">Tienda</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPaw}/>
                </div>
                <div>
                    <a href="/#">Login</a>
                </div>
            </div>
            <div>
                <div>
                </div>
                <div>
                    <CartWidget/>
                </div>
                <div>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;