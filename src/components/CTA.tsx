"use client";

export default function CTA() {
    return (
        <div className="call-to-action pt-60 pb-60 bgn-4" id="cta">
            <style jsx>{`
                .cta-input {
                    background: #0A0A0A !important;
                    border: 1px solid #262626 !important;
                    border-radius: 12px !important;
                    padding: 18px 24px !important;
                    color: white !important;
                    font-family: inherit;
                }
                .cta-input::placeholder {
                    color: #666 !important;
                }
                .custom-dot-checkbox {
                    width: 20px;
                    height: 20px;
                    background: #F6471C;
                    border-radius: 50%;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    flex-shrink: 0;
                }
                .cta-submit-btn {
                    background: #F6471C !important;
                    color: white !important;
                    border: none !important;
                    border-radius: 12px !important;
                    padding: 12px 40px !important;
                    font-weight: 600 !important;
                    transition: transform 0.2s;
                }
                .cta-submit-btn:hover {
                    transform: scale(1.05);
                }
                .stay-title {
                    font-weight: 900 !important;
                    letter-spacing: -1px;
                }
            `}</style>
            <div className="container">
                <div className="row justify-content-between align-items-center g-6">
                    <div className="col-lg-6">
                        <h2 className="display-two tcn-1 mb-4 stay-title title-anim">Stay up to date</h2>
                        <p className="fs-lg tcn-6 mb-0 max-500">
                            Have questions or feedback? We'd love to hear from you. Reach out to our team or use our contact form.
                        </p>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <form action="#" className="cta-form">
                            <div className="mb-4">
                                <input type="email" placeholder="Enter your email" className="cta-input w-100" />
                            </div>
                            <div className="d-flex align-items-center justify-content-start gap-sm-8 gap-4 flex-wrap">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="custom-dot-checkbox"></div>
                                    <span className="fs-base tcn-6">
                                        I agree with <a href="#" className="tcp-1 text-decoration-underline">Privacy Policy</a> and <a href="#" className="tcp-1 text-decoration-underline">Terms & Conditions</a>
                                    </span>
                                </div>
                                <div className="ms-sm-auto">
                                    <button type="submit" className="cta-submit-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
