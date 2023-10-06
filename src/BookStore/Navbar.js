import {Container, Nav, Navbar} from 'react-bootstrap'


function SettNavbar(){
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">World BookStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar1">  
         
            <Nav className="me-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/authormodel">AuthorModel</Nav.Link>
              <Nav.Link href="/rackmodel">RackModel</Nav.Link>
              <Nav.Link href="/category">Category</Nav.Link>
              <Nav.Link href="/bookmodel">BookModel</Nav.Link>

             
             
              {/* <Nav.Link href="/counter">Counter</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default SettNavbar;