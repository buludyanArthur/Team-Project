import React, {useState} from 'react';
import UseBooks from '../components/actions/useBook'
import {Book} from './Book'

const BooksList = () =>{
    
    const [sortBy, setSortBy] = useState('TITLE_ASC');
    const books = UseBooks(sortBy);
       
    return (
        <section className="books-container">
            <div className="sort-line">
                <label>Sort By:</label>
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    {/* <option value="TITLE_ASC">Default</option> */}
                    <option value="TITLE_ASC">Title (A-Z)</option>
                    <option value="TITLE_DESC">Title (Z-A)</option>
                    <option value="PRICE_ASC">Price: Low to Higth</option>
                    <option value="PRICE_DESC">Price: Higth to Low</option>
                </select>

            </div>
            <ul className="book-container">{books.map(item => 
            <li key ={item.id}>
            <div className="book-img-cont">
                <img className="book-img" src={item.URL} alt={item.title}/>
            </div> 
                           
                <Book title={item.title} author={item.author} price={item.price} category={item.category}/>
            </li> 
            )}
            </ul>
        </section>
    
    )
}
export default BooksList;

