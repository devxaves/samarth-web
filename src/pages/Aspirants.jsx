import React from 'react';
import PropTypes from 'prop-types';
import "../scss/component/aspirants.scss"

import PageTitle from '../components/pagetitle/PageTitle';

function Aspirants(props) {
    return (
        <div className='wrapper'>
            <PageTitle title='For Aspirants' desc="Your Preparation Zone" />
            <div className="block-text center">
                <h3 className='heading'>Upcoming Exams</h3>
                
                <div className="Upcoming_exams">
                4 Feb - GATE - Gratitide Aptitude Test In Engineering
                </div>
                <div className="Upcoming_exams">
                4 Feb - GATE - Gratitide Aptitude Test In Engineering
                </div>
                <div className="Upcoming_exams">
                4 Feb - GATE - Gratitide Aptitude Test In Engineering
                </div>
                <div className="Upcoming_exams">
                4 Feb - GATE - Gratitide Aptitude Test In Engineering
                </div>
               
            </div>

            <div className="block-text center">
                <h3 className="heading"  >Video Resources</h3>
            </div>
        </div>

    );
}

export default Aspirants;