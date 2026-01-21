export default function Faq() {
    return (
        <div className="our-faqs">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">FAQ's</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Smartwatch FAQ answered!
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="faqs-content">
                            <div className="faq-accordion" id="accordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1"
                                        >
                                            1. How long does the battery last?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse2"
                                            aria-expanded="false"
                                            aria-controls="collapse2"
                                        >
                                            2. Can I track my fitness and health?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse3"
                                            aria-expanded="false"
                                            aria-controls="collapse3"
                                        >
                                            3. Are the smartwatches water-resistant?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faqs-content">
                            <div className="faq-accordion" id="accordion1">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading4">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="true"
                                            aria-controls="collapse4"
                                        >
                                            4. Can I make calls and send messages?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="false"
                                            aria-controls="collapse5"
                                        >
                                            5. Can I customize the watch face?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading6">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse6"
                                            aria-expanded="true"
                                            aria-controls="collapse6"
                                        >
                                            6. How do I update my smartwatch?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Absolutely! Our smartwatches include heart rate monitoring, sleep tracking, step counting, and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
                            <p>Not just questions - real solutions for real smartwatch users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
