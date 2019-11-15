import React, {useState, useContext } from 'react';
import {Navbar,FormControl,Form,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UseBooks from '../components/actions/useBook';
import {Book} from '../components/Book';
import { UserContext } from '../components/UserContext';
import { TranslationContext } from '../translations/translations';

function Header (props) {
    const {translate} = useContext(TranslationContext);
    const userContext = useContext(UserContext)

    let books=UseBooks();
    const [search, setSearch] = useState(``);
    const [getBooks, setGetBooks] = useState(books)
    const [sortBy, setSortBy] = useState('by title')
  
    function updateSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
        
        let result
        (sortBy==='by title')?
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
<Navbar className='header-bg'expand="lg" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav"style={{color: 'white'}} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='header-child'>
                    {userContext ? userContext.email === 'admin@gmail.com' ? 
                    <Nav.Link style={{color: 'white'}} as={Link}  to='/addbooks'>{translate('addNewBook')}</Nav.Link>: null : null}
                    <Nav.Link style={{color: 'white'}} as={Link}  to='/'>{translate('home')}</Nav.Link>
                    <Nav.Link style={{color: 'white'}} as={Link} to='/contact'>{translate('contact')}</Nav.Link>
                    <Nav.Link style={{color: 'white'}}as={Link}  to='/aboutus'>{translate('aboutUs')}</Nav.Link>
                    <Nav.Link style={{color: 'white'}} as={Link}  to='/books'>{translate('books')}</Nav.Link>
                </Nav>
  </Navbar.Collapse>
  <Form inline>
      <select  className="searchSelect" value={sortBy} onChange={e=> setSortBy(e.currentTarget.value)}>
          <option value="by title"> {translate('byTitle')}</option>
          <option value="by author">{translate('byAuthor')}</option>
      </select>
       <FormControl type="text"  placeholder={translate('search')} className="mr-sm-2" value={search} onChange={updateSearch}/>
       
    </Form> 
    </Navbar>
  
   <section className="books-container">
                {(search === ``) ? null:
      <ul className="book-container">{
                getBooks
                     .map(item => 
                        <li  key ={item.title}>           
                         <Book id={item.id} src={item.URL} title={item.title} author={item.author} price={item.price} category={item.category}/>
                        </li>              
                    )}
      </ul> 
     }
    </section> 
</>
    )
}

export default Header;