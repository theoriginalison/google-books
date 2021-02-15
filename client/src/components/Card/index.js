import React from "react";

//get this from regular old bootstrap and not react bootstrap OR install react-bootstrap, then import react bootstrap here and get the Card

function Card(props) {
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">by {props.author}</p>
                <a href="#" className="btn btn-primary">Save This Book</a>
            </div>
        </div>

    )
}

export default Card;