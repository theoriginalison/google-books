import React from "react";

//get this from regular old bootstrap and not react bootstrap OR install react-bootstrap, then import react bootstrap here and get the Card

function Card(props) {
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Card;