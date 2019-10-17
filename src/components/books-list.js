import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

const SORT_OPTIONS = {
    'TITLE_ASC': {column: 'title', diraction: 'asc'},
    'TITLE_DESC': {column: 'title', diraction: 'desc'},

    'PRICE_ASC': {column: 'price', diraction: 'asc'},
    'PRICE_DESC': {column: 'price', diraction: 'desc'},


}

function useBooks(sortBy='TITLE_ASC') {
    const [books, setBooks] = useState([]);
    

    useEffect(() =>{
        const unsubscibe = firebase
            .firestore()
            .collection('books')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].diraction)  
            .onSnapshot((snapshot) =>{
             const newBooks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setBooks(newBooks);
        })
        return () => unsubscibe();

    }, [sortBy])
    return books;
}

const BookCard = () =>{
    
    const [sortBy, setSortBy] = useState('TITLE_ASC');
    const books = useBooks(sortBy);

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
                    
                   {/*  <option>Publication Date</option> */}
                </select>

            </div>
            <ul className="book-container">{books.map((book) =>   
            <li className="book" key ={book.id} border="primary" style={{width: '16rem'}}>
                <div className="book-img-cont">
                    <img  className="book-img"  src={book.URL}/>
                </div>
                <div className="book-context">
                    <h3 className="book-info">{book.title}</h3>
                    <p className="book-info text-muted">{book.author}</p>
                    {/* <p>{book.category}</p> */}
                    <p className="price">{book.price} AMD</p>
                    <button className="add-to-card">Add To Card</button>
                </div>
            </li>
        )}
        </ul>
        </section>
    
    )
}
export default BookCard;

