export default function BestSellers() {
    return (
        <div className="best-sellers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="best-sellers-box">
                            <div className="best-selling-product-slider">
                                <div className="swiper best-selling-product-slider-box">
                                    <div className="swiper-wrapper" data-cursor-text="Drag">
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-1.png" alt="Product 1" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-2.png" alt="Product 2" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-3.png" alt="Product 3" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-4.png" alt="Product 4" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-5.png" alt="Product 5" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="best-product-image featured-product">
                                                <img src="/images/product-6.png" alt="Product 6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper best-selling-product-slider-item">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-1.png" alt="Product 1" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-2.png" alt="Product 2" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-3.png" alt="Product 3" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-4.png" alt="Product 4" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-5.png" alt="Product 5" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-cursor-text="Click">
                                            <div className="best-product-image">
                                                <figure>
                                                    <img src="/images/product-6.png" alt="Product 6" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="best-selling-product-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">Best sellers</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Top-Rated smartwatches you love!
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Discover our best-selling smartwatches, loved for their cutting-edge features, sleek designs, and unbeatable performance.
                                    </p>
                                </div>

                                <div className="best-product-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Hi-Res Audio, Studio-Grade Sound</li>
                                        <li>Music Control &amp; Playback</li>
                                        <li>Bluetooth &amp; Wi-Fi Connectivity</li>
                                        <li>NFC for Contactless Payments</li>
                                    </ul>
                                </div>

                                <div className="best-product-options wow fadeInUp" data-wow-delay="0.6s">
                                    <h3>Available Color Options:</h3>
                                    <div className="best-product-image">
                                        <figure>
                                            <img src="/images/product-4.png" alt="Color option 1" />
                                        </figure>
                                    </div>
                                    <div className="best-product-image">
                                        <figure>
                                            <img src="/images/product-2.png" alt="Color option 2" />
                                        </figure>
                                    </div>
                                    <div className="best-product-image">
                                        <figure>
                                            <img src="/images/product-1.png" alt="Color option 3" />
                                        </figure>
                                    </div>
                                </div>

                                <div className="product-model-list wow fadeInUp" data-wow-delay="0.8s">
                                    <ul>
                                        <li>Model: ChronoX Pro S5</li>
                                        <li>Model: Aerowatch X9</li>
                                        <li>Model: LuxSync Pro</li>
                                        <li>Model: PulseFit Z3</li>
                                    </ul>
                                </div>

                                <div className="best-product-btn wow fadeInUp" data-wow-delay="1s">
                                    <a href="/#" className="btn-default btn-highlighted">
                                        Purchase now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
