import React from 'react';


function Header(props){

    function selectPres() {
        props.changeCandidate("Pres")
    }

    function selectState() {
        props.changeCandidate("State")
    }
    
    function selectLocal() {
        props.changeCandidate("Local")
    }    

    return(
        <div>
        <h1>Voting Machine</h1>

        <button className="btn btn-danger" onClick={selectPres}>President</button>
        <button className="btn btn-danger" onClick={selectState}>State</button>
        <button className="btn btn-danger" onClick={selectLocal}>Local</button>
        </div>
    )
}

export default Header;