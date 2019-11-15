import  {useState, useEffect} from 'react';
import firebase from '../../Config/Fire'
import SORT_OPTIONS from '../options/Sort_Options';

const  UseBooks = (sortBy='TITLE_ASC') =>{
    const [books, setBooks] = useState([]);
         
    useEffect(() =>{
        const unsubscribe = firebase
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
        return () => unsubscribe();

    }, [sortBy])
    return books;
}
export default UseBooks;
