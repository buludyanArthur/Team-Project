import React, {useState} from 'react';
import UseBooks from '../components/actions/useBook'
import {Book} from './Book'
import Loading from './loading';

const BooksList = () =>{    
    const [sortBy, setSortBy] = useState('TITLE_ASC');
    const books = UseBooks(sortBy);
    const [selectCategory, setSelectCategory] =useState(``);

let category=books.map(el=>el.category);
category = category.filter((el, index) => category.indexOf(el) === index)

let categoryOptions = category.map((val)=>{
    return <li key = {`option_${val}`} >
            <div value={val} onClick={ () => {setSelectCategory(val)}}>
                {val}
            </div>
        </li>
   })  
    return (
        
        <section className="book-page">
            {/* category */}
            <section className="book-category">
                <ul>
                    {categoryOptions}
                </ul>
            </section>

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
            {(books.length === 0)? <Loading/>:(selectCategory === ``)?
            <ul className="book-container">{
                books.map(item => 
                    <li key ={item.title}>           
                     <Book src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                    </li>              
                     )}
            </ul>
            :<ul className="book-container">{
                books.filter(item => item.category === selectCategory)
                     .map(item => 
                        <li key ={item.title}>           
                         <Book src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                        </li>              
                    )}
            </ul>                       
        }
        </section>
    </section>    
    )
}
export default BooksList;

