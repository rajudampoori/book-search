import React, { useState } from "react";
import axios from "axios"
import Card from "./card";

const BookSearch = () => {
    const [search, setSearch] = useState('')
    const [bookData, setData] = useState([]);
    const searchBook =  (evt) => {
        if(evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDzQP52aM8c7P7me7tvviI3D6mzKWCy55M'+'&maxResults=40')
            .then(res =>setData(res.data.items))
            .catch(err=> {console.log(err)})
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>BOOK SEARCH </h1>
                </div>
                <div className="row2">
                    <h1>Find Your Book</h1>
                    <div className="search">
                        <input placeholder="Search for a book and Enter" type="text" value={search}
                         onChange={(e) => { setSearch(e.target.value) }} onKeyPress={searchBook}/>
                        <button>search</button><br />
                    </div>
                    <img src="../images/bg3.png" />
                </div>
            </div>
            <div className="container">
                <Card book = {bookData}/>
            </div>
        </>
    )
}
export default BookSearch;
//book={books} onKeyPress={handleClick}  style={{ width: "60vw" }} 
