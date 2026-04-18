import './header.css';

function Header (props) {
    // https://dontpad.com/flex34
    return (
        <header>
            <div className="row">
                <div className="col-3">
                    LogoMarca
                </div>
                <div className="col-9">
                    Menu
                </div>
            </div>
        </header>
    )
}

export default Header