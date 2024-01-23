import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/new/whitelogo.png';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// Specify all properties: name, family, style


function Footer(props) {
    return (
        <footer class="footer-section">
            <div class="container">
                <hr class="hr-line"></hr>
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <div class="cta-text1">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                    <h4>Find us</h4>
                                    <span>Techno Main Salt Lake, <br />EM-4/1, Sector-V, Salt Lake, <br />Kolkata : 700 091</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <div class="cta-text">
                                    <i><FontAwesomeIcon icon={faPhone} /></i>
                                    <h4>Call us</h4>
                                    <span>+91 7686064101</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <div class="cta-text">
                                    <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                    <h4>Mail us</h4>
                                    <span><Link to="mailto:samarth.tmsl@gmail.com"
                                        target="_blank">samarth.tmsl@gmail.com</Link></span><br />

                                </div>
                                <div class="cta-text2">
                                    <i class="mail2"><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                                    <span><Link to="mailto:business.samarth.tmsl@gmail.com"
                                        target="_blank">business.samarth.tmsl@gmail.com</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="hr-line"></hr>
                <div class="footer-content pt-3 pb-3">
                    <div class="row">
                        <div class="col-xl-12 col-lg-4 ">
                            <div class="footer-widget">
                                <div class="footer-logo d-flex justify-content-center">
                                    <img src={logo} class="img-fluid" alt="logo" />
                                </div>
                                <div class="footer-social-icons">
                                    <span className='d-flex justify-content-center'>Follow us</span>
                                    <div class="d-flex justify-content-center">
                                    <a href="https://m.facebook.com/SamarthTMSL?fref=nf&refid=52&__tn__=%7E-R" target="blank"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                                    <a href="https://twitter.com/SamarthTmsl" target="blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                                    <a href="https://www.instagram.com/samarth_tmsl_official/" target="blank"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
           </div>
        </footer>
        
    );
}

export default Footer;
