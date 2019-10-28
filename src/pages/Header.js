import React, {useState } from 'react';
import {Navbar,NavDropdown,FormControl,Form,Button,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UseBooks from '../components/actions/useBook';
import {Book} from '../components/Book';

function Header () {
    let books=UseBooks()
    const [search, setSearch] = useState(``);
    const [getBooks, setGetBooks] = useState(books)
    const [sortBy, setSortBy] = useState('by name')
  
    function updateSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search)
        let result
        (sortBy==='by name')?
             result= books.filter( book => {
                return book.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        
    :
     result= books.filter( book => {
        return book.author.toLowerCase().includes(e.target.value.toLowerCase());
    })
        
        setGetBooks(result);
 } 

    return (
        <>
<Navbar className='header-bg'expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='header-child'>
                <Nav.Link as={Link}  to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link as={Link}  to='/aboutus'>About Us</Nav.Link>
                <Nav.Link as={Link}  to='/books'>Books</Nav.Link>
              
                </Nav>
  </Navbar.Collapse>
  <Form inline>
      <select value={sortBy} onChange={e=> setSortBy(e.currentTarget.value)}>
          <option value="by name"> by name</option>
          <option value="by author">by author</option>
      </select>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={updateSearch}/>
       
    </Form> 
    </Navbar>
  
   <section className="books-container">
                {(search === ``) ? null:
      <ul className="book-container">{
                getBooks
                     .map(item => 
                        <li key ={item.title}>           
                         <Book src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                        </li>              
                    )}
      </ul> 
     }
    </section> 

</>
    )
}

export default Header;