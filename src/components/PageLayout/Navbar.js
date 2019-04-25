import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="instructions/index.html" className="link">
          Test instructions
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
