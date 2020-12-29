import React from 'react'
import Link from 'next/link'

function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="blog__top">
                    <h3 className="blog__heading">blog</h3>
                </div>
                <div className="blog__inner">
                    <div className="blog__item">
                        <div className="blog__box">
                            <Link href="/blog">
                                <a className="blog__image-link">
                                    <img src="/images/blog-1.jpg" className="blog__image" alt="blog" />
                                </a>
                            </Link>
                            <div className="blog__description">
                                <div className="blog__description-top">
                                    <div className="blog__description-left">
                                        <span className="blog__date">06</span>
                                        <span className="blog__month">jun</span>
                                    </div>
                                    <div className="blog__description-right">
                                        <h4 className="blog__description-heading">
                                            <Link href="/blog">
                                                <a className="blog__description-link">
                                                    Lorem ipsum dolor sit .
                                                </a>
                                            </Link>
                                        </h4>
                                        <h5 className="blog__description-heading blog__description-heading--small">by sridhar</h5>
                                    </div>
                                </div>
                                <div className="blog__content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reprehenderit beatae eligendi rerum nisi non culpa optio asperiores, inventore error.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__box">
                            <Link href="/blog">
                                <a className="blog__image-link">
                                    <img src="/images/blog-2.jpg" className="blog__image" alt="blog" />
                                </a>
                            </Link>
                            <div className="blog__description">
                                <div className="blog__description-top">
                                    <div className="blog__description-left">
                                        <span className="blog__date">06</span>
                                        <span className="blog__month">jun</span>
                                    </div>
                                    <div className="blog__description-right">
                                        <h4 className="blog__description-heading">
                                            <Link href="/blog">
                                                <a className="blog__description-link">
                                                    Lorem ipsum dolor sit .
                                                </a>
                                            </Link>
                                        </h4>
                                        <h5 className="blog__description-heading blog__description-heading--small">by sridhar</h5>
                                    </div>
                                </div>
                                <div className="blog__content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reprehenderit beatae eligendi rerum nisi non culpa optio asperiores, inventore error.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__box">
                            <Link href="/blog">
                                <a className="blog__image-link">
                                    <img src="/images/blog-3.jpg" className="blog__image" alt="blog" />
                                </a>
                            </Link>
                            <div className="blog__description">
                                <div className="blog__description-top">
                                    <div className="blog__description-left">
                                        <span className="blog__date">06</span>
                                        <span className="blog__month">jun</span>
                                    </div>
                                    <div className="blog__description-right">
                                        <h4 className="blog__description-heading">
                                            <Link href="/blog">
                                                <a className="blog__description-link">
                                                    Lorem ipsum dolor sit .
                                                </a>
                                            </Link>
                                        </h4>
                                        <h5 className="blog__description-heading blog__description-heading--small">by sridhar</h5>
                                    </div>
                                </div>
                                <div className="blog__content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reprehenderit beatae eligendi rerum nisi non culpa optio asperiores, inventore error.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
