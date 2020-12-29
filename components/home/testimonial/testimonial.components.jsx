import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial__inner">
                <div className="container">
                    <div className="testimonial__list">

                        <div className="testimonial__item">

                            <h3 className="testimonial__heading">
                                testimonial
                            </h3>
                            <FontAwesomeIcon icon={faQuoteLeft} className="testimonial__icon" />
                            <div className="testimonial__description">
                                <div className="testimonial__content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea accusamus. Perspiciatis ex earum iste modi, architecto labore veritatis ipsa eaque aut recusandae corporis doloremque quas alias sed nesciunt totam ab veniam incidunt beatae facere magni harum enim? Asperiores, id?
                                </div>
                                <div className="testimonial__user">
                                    <h4 className="testimonial__name">sridhar reddy</h4>
                                    <div className="testimonial__occupation">____<span>developer</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Testimonial
