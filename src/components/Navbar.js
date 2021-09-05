import {Link} from 'react-router-dom'

const  Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Brads React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog Post</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;