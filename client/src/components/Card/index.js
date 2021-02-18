import React from "react";

//get this from regular old bootstrap and not react bootstrap OR install react-bootstrap, then import react bootstrap here and get the Card

function Card(props) {
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={props.book[0].imageLinks.thumbnail} className="card-img-top" alt={props.book[0].volumeInfo.title} />
            <div className="card-body">
                <h5 className="card-title">{props.book[0].volumeInfo.title}</h5>
                <p className="card-text">by {props.book[0].volumeInfo.authors}</p>
                <a href="#" className="btn btn-primary">Save This Book</a>
            </div>
        </div>

    )
}

export default Card;