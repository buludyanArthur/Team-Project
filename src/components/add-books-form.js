import React, {useState} from 'react';
import firebase from '../firebase';
//import { storage } from 'firebase';


const AddBookForm = () => {
    const [title, setTitle] = useState(``);
    const [author, setAuthor] = useState(``);
    const [genre, setGanre] = useState(``);
    const [price, setPrice] = useState(``);
    const [image, setImage] = useState(``);
    
    function onSubmit(e) {
        e.preventDefault();
              
        firebase
        .firestore()
        .collection(`books`)
        .add({
            title,
            author,
            genre,
            price: parseInt(price),
        })
        .then(() => {
            setTitle(``);
            setAuthor(``);
            setGanre(``);
            setPrice(``);
            setImage(``);
        })
    
}

    return (
        <form className="admin-add-books" onSubmit={onSubmit}>
            <h4>Add book</h4>
            <div>
                <label>Title</label>
                <input className = "add-book" type="text" value={title} onChange ={e => setTitle(e.currentTarget.value)} placeholder="Enter book title..."required/>
            </div>
            <div>
                <label>Author</label>
                <input className = "add-book" type="text" value={author} onChange ={e => setAuthor(e.currentTarget.value)} placeholder="Enter book author..."required/>
            </div>
            <div>
                <label>Genre</label>
                <input className = "add-book price" type="text" value={genre} onChange ={e => setGanre(e.currentTarget.value)} placeholder="Enter book genre..."required/>
            </div>
            <div>
                <label>Price</label>
                <input className = "add-book price" type="number" value={price} onChange ={e => setPrice(e.currentTarget.value)} placeholder="Enter price..."required/>
            </div>
            
            <div>
                <label>choose img</label>
                <input  type="file" value={image} onChange={e => setImage(e.currentTarget.file)}/>
            </div>
            
            <button>Add book</button>

        </form>
    )
}
export default AddBookForm;