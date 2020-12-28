import Link from "next/link";



function ServiceSection() {
    return (
        <div className="service">
            <div className="container">
                <div className="service__heading">services</div>
                <div className="service__inner">
                    <div className="service__item">
                        <div className="service__box">
                            <div className="service__image-block">
                                <img src="/images/services-1.jpg" className="service__image" alt="service " />
                            </div>
                            <div className="service__description">
                                <h3 className="service__heading-secondary">Architectural Design</h3>
                                <p className="service__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ad? Dolore ex animi maiores labore sunt tempora quasi possimus eligendi.</p>
                                <Link href="/" >
                                    <a className="service__link">read more</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service__item">
                        <div className="service__box">
                            <div className="service__image-block">
                                <img src="/images/services-2.jpg" className="service__image" alt="service " />
                            </div>
                            <div className="service__description">
                                <h3 className="service__heading-secondary">Interior Design</h3>
                                <p className="service__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ad? Dolore ex animi maiores labore sunt tempora quasi possimus eligendi.</p>
                                <Link href="/" >
                                    <a className="service__link">read more</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="service__item">
                        <div className="service__box">
                            <div className="service__image-block">
                                <img src="/images/services-3.jpg" className="service__image" alt="service " />
                            </div>
                            <div className="service__description">
                                <h3 className="service__heading-secondary">Lighting Design</h3>
                                <p className="service__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ad? Dolore ex animi maiores labore sunt tempora quasi possimus eligendi.</p>
                                <Link href="/" >
                                    <a className="service__link">read more</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection