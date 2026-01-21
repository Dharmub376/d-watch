export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">about us</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Built with precision and passion, our smartwatches combine advanced feature
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="about-us-item wow fadeInUp">
                            <div className="about-item-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-1.jpg" alt="Tough and Firm" />
                                </figure>
                            </div>
                            <div className="about-item-content">
                                <h3>Tough And Firm</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="about-us-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="about-item-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-2.jpg" alt="HD Large Screen" />
                                </figure>
                            </div>
                            <div className="about-item-content">
                                <h3>HD Large Screen</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="about-us-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="about-item-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-3.jpg" alt="Magnetic Charging" />
                                </figure>
                            </div>
                            <div className="about-item-content">
                                <h3>Magnetic Charging</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="about-us-item wow fadeInUp" data-wow-delay="0.6s">
                            <div className="about-item-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-4.jpg" alt="Health Management" />
                                </figure>
                            </div>
                            <div className="about-item-content">
                                <h3>Health Management</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                            <p>
                                Discover the smart life you deserve - <a href="/#">shop your perfect watch today!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
