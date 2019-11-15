import React, {useState, useContext} from 'react';
import {Book} from './Book'
import Loading from './loading';
import UseBooks from './actions/useBook';
import { TranslationContext } from '../translations/translations';

const BooksList = (props) =>{    
    const {translate} = useContext(TranslationContext);
    const [sortBy, setSortBy] = useState('TITLE_ASC');    
    const [selectCategory, setSelectCategory] =useState(``);
    const books = UseBooks(sortBy);
    const book=UseBooks();
      
let category = book.map(el => el.category);
category = category.filter((el, index) => category.indexOf(el) === index)

let categoryOptions = category.map((val)=>{
    return <li id={val} key = { `option_${val}` } >
            <div value = {val} onClick={ () => {
                setSelectCategory(val);
                props.history.push(props.match.url + "?category=" + val)
                }}>
                {val}
            </div>
        </li>
   })
     return (
        
        <section >
            {/* category */}
            <h3 className="cat">{translate('Category')}</h3>
            <section className="book-page">
            <section className="book-category">                
                <ul>
                <li key ="all">
                    <div value = "" onClick={ () => {setSelectCategory(``)}}>
                        All Books
                    </div>
                    </li>
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
                     <Book  id={item.id} src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                    </li>              
                     )}
      
            </ul>
             
            :<ul className="book-container">{
                books.filter(item => item.category === selectCategory)
                     .map(item => 
                        <li key ={item.title}>  
    
                         <Book id={item.id} src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                        </li>              
                    )}
            </ul>                       
        }
        </section>     
    </section>    
    </section>
    )
}
export default BooksList;

