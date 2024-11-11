import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink to={'/customers'}>Customers</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
        </nav>
    )
}

export default NavBar