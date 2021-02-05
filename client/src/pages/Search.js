import React from "react";
import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";


const Search = () => {
    return (
        <>
            <form>
                <Input
                // onChange={handleInputChange}
                // name="title"
                // placeholder="Search for a book title..."
                />
                <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                // onClick={handleFormSubmit}
                >
                    Find a Book
              </FormBtn>
            </form>
            <Card />
        </>
    )
}

export default Search;