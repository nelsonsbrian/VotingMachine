import React from 'react';



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
        
        `}</style>
            <div className="card">
                <img className="card-img-top" src={props.image} />
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <ul class="list-group list-group-flush age">
                        <li class="list-group-item">Age: {props.age}</li>
                        <li class="list-group-item">Exp: {props.exp} yrs</li>

                    </ul>
                    {/* <h4 className="age">Age: {props.age}</h4>
            <h5 className="exp">Exp: {props.exp} yrs</h5> */}
                    <footer>{props.party}</footer>
                    desc = {props.desc}
                    exp = {props.exp}
                </div>
            </div>
        </div>
    )
}

export default Candidate;