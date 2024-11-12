import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return(
        <Navbar>
            <Navbar.Brand>E-Commerce</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                <Nav.Link as={NavLink} to='/' > Home </Nav.Link>
                <Nav.Link as={NavLink} to='/customers' > Customers </Nav.Link>
                <Nav.Link as={NavLink} to='/products' > Products </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar