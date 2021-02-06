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
                <Form.Label>Enter part of a title here.</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setSearchTerms(e.value)} />
                <Form.Text className="text-muted">
                    Enter your search here.    </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => props.findBooks(searchTerms)} >
                Search for a Book
  </Button>
        </Form>

    )
};

export default SearchForm;