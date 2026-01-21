export default function Header() {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="./">
                            <img src="/images/logo.svg" alt="Logo" />
                        </a>

                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Pages
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="header-contact-btn">
                                <a href="/#" className="btn-default btn-highlighted">
                                    Purchase now
                                </a>
                            </div>
                        </div>

                        <div className="navbar-toggle" />
                    </div>
                </nav>
                <div className="responsive-menu" />
            </div>
        </header>
    );
}
