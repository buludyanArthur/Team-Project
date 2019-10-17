import React from 'react';
import './App.css';
import AddBookForm from './components/add-books-form';
import BookCard from './components/books-list';

function App() {
  return (
    <div className="App">
      Book store    
      <AddBookForm/>
      <BookCard/>          
    </div>
  );
}

export default App;
