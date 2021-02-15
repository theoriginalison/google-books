import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

//use props similarly to the portfolio card from the last HW
//might use state here 

function SearchForm(props) {
    //create the hooks to store the input, and useState
    // name of the hook, and how to update the hook, like state, useState
    const [searchTerms, setSearchTerms] = useState("")
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Search for a title here..." onChange={(e) => 
                {console.log(e.target.value)
                setSearchTerms(e.target.value)}}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e) => {
                e.preventDefault()
                props.findBooks(searchTerms)
                }} >
                Search!
  </Button>
        </Form>

    )
};

export default SearchForm;