import React from 'react';


function Header(props) {

    function selectPres() {
        props.changeCandidate("Pres")
    }

    function selectState() {
        props.changeCandidate("State")
    }

    function selectLocal() {
        props.changeCandidate("Local")
    }

    return (
        <div>
            <style jsx>{`
                h1 {
                    text-align: center;
                }
                .buttons {
                    text-align: center;                  
                }
                .headerPane {
                    background-color: lightgrey;
                    border-radius: 15px;
                }
            `}</style>
            <div className='headerPane'>

                <h1>Voting Machine</h1>
                <div className='buttons'>
                    <button className="btn btn-danger mr-3" onClick={selectPres}>President</button>
                    <button className="btn btn-primary mr-3" onClick={selectState}>State</button>
                    <button className="btn btn-info" onClick={selectLocal}>Local</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Header;