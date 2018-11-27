import React from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

function Content(props){
    return(
        <div>
        {props.data.map((candidate, index) => (
          <Candidate
            name = {candidate.name}
            desc = {candidate.desc}
            age = {candidate.age}
            exp = {candidate.exp}
            party = {candidate.party}
            votes = {candidate.votes}
            image = {candidate.image}
            key = {index}
          />

        ))}
        </div>
    )
}

export default Content;