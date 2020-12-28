import Link from "next/link";

const SliderSection = () => {
    return (
        <div className="slider">
            <div className="slider__item">
                {/* <img src={sliderImage1} alt="dream house slider 1" className="slider__image" /> */}
                <div className="slider__image"></div>
                <div className="slider__content">
                    <h1 className="slider__heading">we create amazing things</h1>
                    <Link href="/" >
                        <a className="slider__link">view our work</a></Link>
                </div>
            </div>
        </div>
    )
}

export default SliderSection