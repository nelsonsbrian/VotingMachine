import React from 'react';
import Proptypes from 'prop-types';
import Candidate from './Candidate';

function Content(props) {
    return (
        <div>
            {props.data.sort((a, b) => b.votes - a.votes).map((candidate, index) => (
                <Candidate
                    name={candidate.name}
                    desc={candidate.desc}
                    age={candidate.age}
                    exp={candidate.exp}
                    party={candidate.party}
                    votes={candidate.votes}
                    image={candidate.image}
                    key={index}
                    position={candidate.position}
                    handleChangeUpVote={() => props.handleChangeUpVote(candidate)}
                    handleChangeDownVote={() => props.handleChangeDownVote(candidate)}
                />

            ))}
        </div>
    )
}

Content.propTypes = {
    // data: Proptypes.array,
    handleChangeDownVote: Proptypes.func,
    handleChangeUpVote: Proptypes.func
}


export default Content;