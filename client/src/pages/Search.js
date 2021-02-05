import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";

//this is where we'll store the data that's being sent

const Search = () => {
    //create functions here to make the API requests to MY API

    //this needs to be propped down to the search component too
    const findBooks = (searchTerms) => {
        axios.get(`/api/books/${searchTerms}`)
    }.then
    //when you get the data back, save it in the Hooks, use state here, and save the results from your search, and then prop it down to the card (where it will be rendered)

    return (
        <>
            <SearchForm />
            <Card />
        </>
    )
}

export default Search;