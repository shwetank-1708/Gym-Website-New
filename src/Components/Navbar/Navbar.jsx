import { Link } from "react-scroll";
import "./Navbar.css";

const Nav = () => {
  return (
    <nav className="flex w-full justify-around fixed top-0 left-0 text-white">
      <div className="logo text-2xl">
        <p className="font-bold">logo</p>
      </div>

      <div className="nav-list">
        <ul className="flex">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Our Programs</Link>
          </li>
          <li>
            <Link to="">Testimonials</Link>
          </li>
          <li>
            <Link to="">Membership</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
