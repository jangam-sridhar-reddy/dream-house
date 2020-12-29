import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

function OurWorks() {
    return (
        <div className="ourworks">
            <div className="ourworks__top">
                <h3 className="ourworks__heading">
                    our works
                </h3>
            </div>
            <div className="ourworks__gallery">
                <div className="ourworks__image ourworks__image--1">
                    <div className="ourworks__picture ourworks__picture--1">
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-1.jpg" className="ourworks__inner-pic ourworks__inner-pic--1" alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ourworks__image ourworks__image--2">
                    <div className="ourworks__picture ourworks__picture--2">
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-2.jpg" className="ourworks__inner-pic " alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ourworks__picture ourworks__picture--3">
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-3.jpg" className="ourworks__inner-pic" alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-4.jpg" className="ourworks__inner-pic" alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ourworks__image ourworks__image--3">
                    <div className="ourworks__picture ourworks__picture--4">
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-5.jpg" className="ourworks__inner-pic" alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ourworks__inner-image">
                            <img src="/images/our-works-6.jpg" className="ourworks__inner-pic" alt="our works" />
                            <div className="ourworks__inner-overlay">
                                <Link href="/">
                                    <a className="ourworks__inner-links">
                                        <FontAwesomeIcon icon={faLink} className="ourworks__inner-icon" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourworks__readmore">
                <Link href="/" >
                    <a className="ourworks__readmore-link">view all works</a>
                </Link>
            </div>
        </div>
    )
}

export default OurWorks 
