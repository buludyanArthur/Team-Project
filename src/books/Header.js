import React from 'react';
import {Navbar,NavDropdown,FormControl,Form,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Header () {
    return (
<Navbar className='header-bg'expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='header-child'>
                <Nav.Link as={Link}  to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link as={Link}  to='/aboutus'>About Us</Nav.Link>
                <NavDropdown title="Book" className='header-child-2' id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='action/3.1'>BELLES-LETTRES</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">BELLES-LETTRESTEXTBOOKS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">CHILDREN'S</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">NON-FICTIONIT </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5"> IT and PROGRAMMING </NavDropdown.Item>
                </NavDropdown>
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