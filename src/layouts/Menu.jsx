import { Link } from "react-router"
import './menu.css'
function Menu() {
    return (
        <nav id="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={'/quem-somos'}>Quem Somos</Link>
                </li>
                <li>
                    <Link to={'/produtos'}>Produtos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu