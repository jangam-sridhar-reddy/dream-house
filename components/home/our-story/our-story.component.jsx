import Link from "next/link";
function OurStory() {
    return (
        <>
            <div className="ourstory">
                <div className="container">
                    <div className="ourstory__background-image">
                        <div className="ourstory__container">
                            <div className="ourstory__top">
                                <div className="ourstory__icon">
                                    <img src="./images/our-story-icon.svg" alt="our story" />
                                </div>
                                <div className="ourstory__heading-block">
                                    <h3 className="ourstory__heading">
                                        our story
                                    </h3>
                                    <h5 className="ourstory__heading ourstory__heading--small">Who we are</h5>
                                </div>
                            </div>
                            <div className="ourstory__bottom">
                                <div className="ourstory__content">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus est alias quasi, debitis nemo cum quis iure voluptates facere atque quia consequuntur quod voluptate obcaecati illum cumque nostrum, numquam earum molestiae totam, ratione consequatur fugiat quibusdam fuga! Modi itaque totam explicabo voluptatum error cupiditate aut aliquid! Accusantium tempora maiores animi eaque quam, veritatis ad reiciendis expedita suscipit distinctio! Perspiciatis vero quos alias eius. Impedit dolor asperiores eligendi vitae repudiandae ad ducimus porro quaerat fugiat tenetur vel quis earum nihil sequi dolore, cum dignissimos, laudantium nemo consequatur quibusdam ipsam, ut neque saepe tempore! Voluptatem nisi veniam dicta rem, quaerat nesciunt eligendi!</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit dolore voluptatibus quo possimus ea eaque dicta fugiat porro suscipit assumenda tenetur quis officiis aperiam, dolores sequi? Pariatur, voluptatum molestias!</p>
                                </div>
                                <Link href="/">
                                    <a className="ourstory__link">Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory
