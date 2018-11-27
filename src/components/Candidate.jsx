import React from 'react';
import Proptypes from 'prop-types';

function Candidate(props) {
    return (
        <div>
            <style jsx>{`
        .card-img-top{
            width: 200px;
        }
        .card{
            width: 800px;
            margin-top: 15px;
        }
        .age{
            float: right;
            margin-top: -35px;
        }
        li {
            list-style-type: none;
        }
        .card-title {
            text-align: center;
        }
        .description {
            width: 50%;
            border: gray 1px solid;
            border-radius: 15px;
            background-color: lightgray;
            padding: 3%;
            display: inline-block;            
        }
        .likesDiv {
            display: inline-block;
            width: 140px;
            height: 140px;

            float: right;
            margin-right: 15%;
            margin-top: 5%;
            text-align: center;
        }
        .likephoto {

            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
        h3 { 
            font-size: 40px;
            // float: right;
            margin-right: 15%;
        }
        
        `}</style>
            <div className="card">
                <h1 className="card-title">{props.position}</h1>
                <img className="card-img-top" src={props.image} />
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <ul class="list-group list-group-flush age">
                        <li class="list-group-item">Age: {props.age}</li>
                        <li class="list-group-item">Exp: {props.exp} yrs</li>
                        <li class="list-group-item">Party: {props.party}</li>
                    </ul>
                    <div className='description'>
                        <h4>About Me:</h4>
                        <p>{props.desc}</p>
                    </div>
                    <div className='likesDiv'>
                        <h3>Votes:<br></br> {props.votes}</h3>
                        <img onClick={props.handleChangeUpVote} className='likephoto' src="https://img.icons8.com/dusk/40/34495e/facebook-like.png" />
                        <br />
                        <img onClick={props.handleChangeDownVote} className='likephoto' src="https://img.icons8.com/dusk/40/34495e/thumbs-down.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

Candidate.propTypes = {
    position: Proptypes.string,
    image: Proptypes.string,
    name: Proptypes.string,
    age: Proptypes.number,
    exp: Proptypes.number,
    party: Proptypes.string,
    desc: Proptypes.string,
    votes: Proptypes.number,
    handleChangeDownVote: Proptypes.func,
    handleChangeUpVote: Proptypes.func
}

export default Candidate;