import React, {useState } from 'react';
import {Navbar,NavDropdown,FormControl,Form,Button,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UseBooks from '../components/actions/useBook'



function Header () {

    return (
<Navbar className='header-bg'expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='header-child'>
                <Nav.Link as={Link}  to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link as={Link}  to='/aboutus'>About Us</Nav.Link>
                <Nav.Link as={Link}  to='/books'>Books</Nav.Link>
               {/* <NavDropdown title="Book" className='header-child-2' id="basic-nav-dropdown" >
                    {/* <NavDropdown.Item  value={books} onClick={cat} name="Classics">Classics</NavDropdown.Item>
                    <NavDropdown.Item href="../pages/CartPage">CartPage</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='../components/BooksList'></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> 
                    <select value={currentSelect} onChange={selectCategory}>
                    <option selected >----</option>
                    {options}</select>
                </NavDropdown>*/}
                </Nav>
  </Navbar.Collapse>
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" >

      </FormControl>
    </Form>
</Navbar>
    )
}

export default Header;