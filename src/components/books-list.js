import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import {Card, Button, CardDeck} from 'react-bootstrap';


function useBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const unsubscibe = firebase
            .firestore()
            .collection('books')
            .onSnapshot((snapshot) =>{
             const newBooks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setBooks(newBooks);
        })
        return () => unsubscibe();

    }, [])
    return books;
}

const BookCard = () =>{
    const books = useBooks();

    return (
        <CardDeck>
 {books.map((book) => 

                      
    <Card key ={book.id} border="primary" style={{width: '16rem'}}>
<Card.Img variant="top" src= {book.image} />
<Card.Body>

    <Card.Title>{book.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
    <Card.Text>{book.genre}</Card.Text>
    <Card.Text>{book.price} AMD</Card.Text>
<Button variant="primary">Add To Card</Button>
</Card.Body>
</Card >
)}
</CardDeck>
    )
}
export default BookCard;

