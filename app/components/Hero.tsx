export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <h1 className="text-anime-style-3" data-cursor="-opaque">
                                Smarter time smarter life
                            </h1>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                &quot;Stay connected, track your health.&quot;
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <div className="hero-body wow fadeInUp">
                                <div className="hero-body-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-hero-body-1.svg" alt="Long Battery Life" />
                                    </div>
                                    <div className="hero-body-item-content">
                                        <h3>Long Battery Life</h3>
                                        <p>Enjoy up to 14 days of uninterrupted usage on a single charge.</p>
                                    </div>
                                </div>

                                <div className="hero-body-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-hero-body-2.svg" alt="Water and Dust Resistant" />
                                    </div>
                                    <div className="hero-body-item-content">
                                        <h3>Water &amp; Dust Resistant</h3>
                                        <p>Built to withstand the elements, smartwatch is water and resistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-btn wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" className="btn-default btn-highlighted">
                                    more about us
                                </a>
                            </div>

                            <div className="hero-image">
                                <figure>
                                    <img src="/images/hero-image.png" alt="Smartwatch hero" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
