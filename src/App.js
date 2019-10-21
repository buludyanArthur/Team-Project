import React from 'react';
import './App.css';
import AddBookForm from './components/add-books-form';
import BooksList from './components/BooksList';


function App() {
  return (
    
      <div className="App">
       Book store 
        <br/>
        <AddBookForm/> 
        <BooksList/> 
      </div> 
      
    
  );
}

export default App;
