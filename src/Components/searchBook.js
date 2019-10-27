import React, {useState, useEffect} from 'react';
import UseBooks from '../components/actions/useBook'
import {Book} from './Book'
import Loading from './loading';


function SearchBook(){
    //const [sortBy, setSortBy] = useState('TITLE_ASC');
    let books=UseBooks()
    const [search, setSearch] = useState('');
    const [getBooks, setGetBooks] = useState(books)
    //console.log(books)


    function updateSearch(e){
        setSearch(e.target.value);
        setGetBooks(getBooks.filter(book=>{
            return book.includes(e.target.value);
        }

        ))

    }



    return(
        <div>
            <input type="text" value={search} onChange={updateSearch}/>
              
              
        </div>
    )
}
export default SearchBook;