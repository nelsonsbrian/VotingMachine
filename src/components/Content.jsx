import React from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

function Content(props){
    return(
        <div>

            <Candidate/>
            <p>content here</p>
        </div>
    )
}

export default Content;