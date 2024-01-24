import React from 'react';
import PropTypes from 'prop-types';
import "../scss/component/aspirants.scss"
import img from "../assets/images/background/reddot.png"

import PageTitle from '../components/pagetitle/PageTitle';

function Aspirants(props) {
    return (
        <div className='wrapper'>
            <PageTitle title='For Aspirants' desc="Your Preparation Zone" />
            <div className="block-text center">
                <h3 className='heading'>Upcoming Exams</h3>
                
                <div className='exams-list' >
                <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                3 Feb 2024 - GATE - Gratitide Aptitude Test In Engineering
                </div>
                <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                26 May 2024 - UPSC (prelims) - Union Public Service Commission
                </div>
                <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                20 Sept 2024 - UPSC (mains) - Union Public Service Commission
                </div>
                <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                June 2024 - WBCS - West Bengal Public Service Commission
                </div>
                </div>
               
            </div>

            <div className="block-text center">
                <h3 className="heading"  >Video Resources</h3>
            </div>
        </div>

    );
}

export default Aspirants;