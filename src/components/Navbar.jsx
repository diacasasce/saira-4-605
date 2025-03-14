import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-accent text-accent-content shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-accent-content">Luxury Apartments</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link className="text-accent-content hover:text-accent-content-focus" to="/">Home</Link></li>
            <li><Link className="text-accent-content hover:text-accent-content-focus" to="/gallery">Gallery</Link></li>
            <li><Link className="text-accent-content hover:text-accent-content-focus" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
