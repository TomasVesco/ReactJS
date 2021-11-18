import logo from '../../logo.svg';
import './styles.scss';

const NavBar = () => {
    return (
        <div className="navContainer">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <a href="/#">Inicio</a>
                <a href="/#">Nosotros</a>
                <a href="/#">Contacto</a>
            </div>
            <div>
                <a href="/#">Login</a>
            </div>
        </div>
    );
}

export default NavBar;