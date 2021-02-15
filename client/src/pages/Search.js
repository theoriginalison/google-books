import React from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";



// function Books() {
//     // Setting our component's initial state
//     const [books, setBooks] = useState([])
//     const [formObject, setFormObject] = useState({})
  
//     // Load all books and store them with setBooks
//     useEffect(() => {
//       loadBooks()
//     }, [])
  
//     // Loads all books and sets them to books
//     function loadBooks() {
//       API.getBooks()
//         .then(res => 
//           setBooks(res.data)
//         )
//         .catch(err => console.log(err));
//     };

//this is where we'll store the data that's being sent

const Search = () => {
    //create functions here to make the API requests to MY API

    //this needs to be propped down to the search component too
    const findBooks = (searchTerms) => {
        console.log(searchTerms)
        axios.get("/api/books/googleSearch", {
            params: {
                searchTerms: searchTerms
            }
        })
        .then((res)=>{
            console.log(res)
        })
    };
    //THIS NEEDS TO HAPPEN NEXT !! when you get the data back, save it in the Hooks, use state here, and save the results from your search, and then prop it down to the card (where it will be rendered); then after the user can see all the books, then work on the save

    return (
        <>
            <SearchForm 
            findBooks={findBooks}
            />
            <Card />
        </>
    )
}

export default Search;