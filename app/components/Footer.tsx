export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about-footer">
                            <div className="footer-logo">
                                <img src="/images/footer-logo.svg" alt="Footer logo" />
                            </div>
                            <div className="about-footer-content">
                                <p>Stay connected on the go - track your health, receive calls, and manage your day right from your wrist.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="footer-links-box">
                            <div className="footer-links">
                                <h3>Quick link</h3>
                                <ul>
                                    <li>
                                        <a href="#">home</a>
                                    </li>
                                    <li>
                                        <a href="#">about us</a>
                                    </li>
                                    <li>
                                        <a href="/#">blog</a>
                                    </li>
                                    <li>
                                        <a href="#">feature</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-links">
                                <h3>Support</h3>
                                <ul>
                                    <li>
                                        <a href="#">help</a>
                                    </li>
                                    <li>
                                        <a href="#">privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="#">term's condition</a>
                                    </li>
                                    <li>
                                        <a href="/#">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-links footer-contact-info">
                                <h3>Contact</h3>
                                <div className="footer-contact-list">
                                    <div className="footer-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-phone.svg" alt="Phone" />
                                        </div>
                                        <div className="footer-contact-content">
                                            <p>
                                                <a href="tel:+9779812345678">+977 981-2345678</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="footer-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-mail.svg" alt="Mail" />
                                        </div>
                                        <div className="footer-contact-content">
                                            <p>
                                                <a href="mailto:info@dharmagat.com.np">info@dharmagat.com.np</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="footer-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-location.svg" alt="Location" />
                                        </div>
                                        <div className="footer-contact-content">
                                            <p>Bharatpur-2, Chitwan, Nepal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="footer-copyright">
                            <div className="footer-copyright-text">
                                <p>Copyright © 2025 All Rights Reserved.</p>
                            </div>
                            <div className="footer-social-links">
                                <ul>
                                    <li>
                                        <a href="https://instagram.com/dharmub376" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com/dharmub376" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/dharmub376" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-x-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pinterest.com/dharmub376" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-pinterest-p" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
