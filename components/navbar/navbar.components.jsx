import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__logo">
                        <Link href="/"  >
                            {/* <img src="" alt="dream house" /> */}
                            <a className="header__logo-link">
                                DREAM HOUSE

                            </a>
                        </Link>
                    </div>
                    <nav className="header__navbar">
                        <ul className="header__list">
                            <li className="header__items">
                                <Link href="/about-us" ><a className="header__navbar-link">About us</a></Link>
                            </li>
                            <li className="header__items">
                                <Link href="/contact-us" ><a className="header__navbar-link">Contact us</a></Link>
                            </li>
                            <li className="header__items">
                                <Link href="/portfolio" ><a className="header__navbar-link">Portfolio</a></Link>
                            </li>
                            <li className="header__items">
                                <Link href="/blog" ><a className="header__navbar-link">Blog</a></Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__social">
                        <ul className="header__social-list">
                            <li className="header__social-item">
                                <Link href="/"  >
                                    <a className="header__social-link">
                                        <FontAwesomeIcon icon={faFacebookF} />

                                    </a>
                                </Link>
                            </li>
                            <li className="header__social-item">
                                <Link href="/" >
                                    <a className="header__social-link">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </Link>
                            </li>
                            <li className="header__social-item">
                                <Link href="/"  >
                                    <a className="header__social-link">

                                        <FontAwesomeIcon icon={faPinterestP} />
                                    </a>
                                </Link>
                            </li>
                            <li className="header__social-item">
                                <Link href="/" >
                                    <a className="header__social-link">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;