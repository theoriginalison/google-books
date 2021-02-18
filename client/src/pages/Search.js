import React, {Component} from "react";
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

class Search extends Component {
    //create functions here to make the API requests to MY API
state = {
    books: [ {
imageLinks: {
    thumbnail: ""
}, 
volumeInfo: {
    title: "",
    authors: "",
}
     } ]
}
    //this needs to be propped down to the search component too
    findBooks = (searchTerms) => {
        console.log(searchTerms)
        axios.get("/api/books/googleSearch", {
            params: {
                searchTerms: searchTerms
            }
        })
        .then((res)=>{
            console.log(res.data.items[0])
            this.setState({books: res.data.items[0]})
        })
    };
    
render() {
    return (
        <>
            <SearchForm 
            findBooks={this.findBooks}
            />
            <Card book={this.state.books}/>
        </>
    )
}
    
}

export default Search;