import React from 'react';



function Candidate(props){
    return(
        <div>
            name = {props.name}
            desc = {props.desc}
            age = {props.age}
            exp = {props.exp}
            party = {props.party}
            votes = {props.votes}
            image = {props.image}
            key = {props.index}
            <br></br>
            <br></br>
        </div>
    )
}

export default Candidate;