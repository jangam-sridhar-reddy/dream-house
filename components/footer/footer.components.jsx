import React from 'react'
import Link from 'next/link';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__list">
                        <div className="footer__item">
                            <div className="footer__box">
                                <div className="footer__logo">
                                    <Link href="/">
                                        <a className="footer__logo-link">
                                            <span>
                                                dream house
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="footer__content">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae autem inventore corrupti voluptate et at enim reiciendis reprehenderit expedita nostrum!
                                </div>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__box">
                                <h3 className="footer__heading">services</h3>
                                <ul className="footer__lists">
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">architectural design</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">interior design</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">lighting design</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">autoCAD service</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__box">
                                <h3 className="footer__heading">quick links</h3>
                                <ul className="footer__lists">
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">about us</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">get quote</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">blog</a>
                                        </Link>
                                    </li>
                                    <li className="footer__lists-item">
                                        <Link href="/">
                                            <a className="footer__link">contact us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__box">
                                <h3 className="footer__heading">recent posts</h3>
                            </div>
                            <div className="footer__gallery">
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/services-1.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/services-2.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/services-3.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/blog-1.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/blog-2.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__gallery-box">
                                    <div className="footer__image">
                                        <Link href="/">
                                            <a className="footer__pic-link">
                                                <img src="/images/blog-3.jpg" className="footer__pic" alt="post" />

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-list">
                        <div className="footer__bottom-item">
                            Copyright 2021,{" "}
                            <a href="https://www.facebook.com/rana.pratap.9440" target="_blank" rel="noopener noreferrer">By Rana</a>
                            {" "}
                            All right reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
