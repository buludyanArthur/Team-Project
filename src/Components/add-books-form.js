import React, {useState} from 'react';
import firebase from '../Config/Fire';
import {storage} from '../Config/Fire';

const AddBookForm = () => {
    const [title, setTitle] = useState(``);
    const [author, setAuthor] = useState(``);
    const [category, setCategory] = useState(``);
    const [price, setPrice] = useState(``);
    const [image, setImage]= useState(null);
    const [URL, setURL]= useState(``);
    //image loading
    const[progress, setProgress]= useState(0);
    
    

    //choose image and preview before uploading
    function handleChange (e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage(image);
            let reader = new FileReader();
        
            reader.onloadend = () => {
                setURL(reader.result);
            }
            reader.readAsDataURL(image)
        }
       
    };
    
    function onSubmit(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
             setProgress(progress);
        }, (error) => {
            //error
            console.log(error);
        }, 
        () => {
            //complate
            storage.ref('images').child(image.name).getDownloadURL()
                .then(URL => setURL(URL))
        });           
              
        firebase
        .firestore()
        .collection(`books`)
        .add({
            title,
            author,
            category,
            price: parseInt(price),
            URL            
        })
        .then(() => {
            setTitle(``);
            setAuthor(``);
            setCategory(``);
            setPrice(``);
            setImage(null);
            setProgress(0);
            setURL(``);
        })
     
}

    return (
        <form className="admin-add-books" onSubmit={onSubmit}>
            <h4>Add book</h4>
            <div className="float-left">
            <div className="input-line">
                <label>Title:</label><br/>
                <input className = "add-book" type="text" value={title} onChange ={e => setTitle(e.currentTarget.value)} placeholder="Enter book title..."required/>
            </div>
            <div className="input-line"> 
                <label>Author:</label><br/>
                <input className = "add-book" type="text" value={author} onChange ={e => setAuthor(e.currentTarget.value)} placeholder="Enter book author..."required/>
            </div>
            <div className="input-line">
                <label>Price:</label><br/>
                <input className = "add-book" type="number" value={price} onChange ={e => setPrice(e.currentTarget.value)} placeholder="Enter price..."required/>
            </div>
            <div className="input-line">
                <label>Book category:</label>
                <select  value={category} onChange ={e => setCategory(e.currentTarget.value)}required>
                <option value=""> ----</option>
                
                <option> Biographies & Memoirs</option>
                <option> Children's Books</option>
                <option> Computers & Technology</option>
                <option> Education & Teaching</option>
                <option> History</option>
                {/* Literature & Fiction */}
                <option> Action & Adventure</option>
                <option> Classics</option>
                <option> Detectives </option>
                <option> Dramas & Plays</option>
                <option> Fantasy</option>
                <option> Horror</option>
                <option> Romance</option>
                <option> Novels</option>
            </select>
            </div>
            </div>
           
           <div className=" float-left upload-img">
                <div className="upload-img">
                    <img src={URL|| 'https://via.placeholder.com/100x120'} alt="Preveiw" height="120" width="100"/>
                    <br/>
                    <progress value={progress} max="100"/>
                    <input type="file"  onChange = {handleChange} required/>
                </div>
                <button>Add book</button>
            </div>
        </form>
    )
}
export default AddBookForm;