export default function Testimonials() {
    return (
        <div className="our-testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="testimonials-content">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">testimonials</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Loved by thousands worldwide
                                </h2>
                            </div>

                            <div className="review-box">
                                <div className="review-images">
                                    <div className="review-image">
                                        <figure className="image-anime reveal">
                                            <img src="/images/author-1.jpg" alt="Author" />
                                        </figure>
                                    </div>
                                    <div className="review-image">
                                        <figure className="image-anime reveal">
                                            <img src="/images/author-2.jpg" alt="Author" />
                                        </figure>
                                    </div>
                                    <div className="review-image">
                                        <figure className="image-anime reveal">
                                            <img src="/images/author-3.jpg" alt="Author" />
                                        </figure>
                                    </div>
                                    <div className="review-image add-more">
                                        <i className="fa-solid fa-plus" />
                                    </div>
                                </div>

                                <div className="review-box-content">
                                    <div className="review-rating-star">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <span className="counter">4.9</span>
                                    </div>
                                    <div className="review-rating-content">
                                        <p>4.9 / 5 Ratings</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonials-btn wow fadeInUp" data-wow-delay="0.2s">
                                <a href="#" className="btn-default">
                                    View All Reviews
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="testimonial-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-quote">
                                                <img src="/images/testimonial-quote.svg" alt="Quote" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>The design is sleek, the features are impressive, and the battery life is outstanding. This smart watch exceeded my expectations!</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/images/author-1.jpg" alt="Jimmy Wilson" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Jimmy Wilson</h3>
                                                    <p>technician</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-quote">
                                                <img src="/images/testimonial-quote.svg" alt="Quote" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>This smartwatch completely changed the way I track my workouts. From heart rate to calories, it gives me every I need right on my wrist.</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/images/author-2.jpg" alt="Samantha Reed" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Samantha Reed</h3>
                                                    <p>Product manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-quote">
                                                <img src="/images/testimonial-quote.svg" alt="Quote" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>This smartwatch completely changed the way I track my workouts. From heart rate to calories, it gives me every I need right on my wrist.</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/images/author-3.jpg" alt="Daniel Carter" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Daniel Carter</h3>
                                                    <p>Office Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
