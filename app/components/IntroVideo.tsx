export default function IntroVideo() {
    return (
        <div className="intro-video">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-video-box">
                            <video autoPlay muted loop id="myVideo">
                                <source src="/media/smart-time-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
