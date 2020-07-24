import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <div>
            <h2>
              S<span>2</span>
            </h2>
          </div>
          <div>
            <ul>
              <li>
                <Link className="nav-item" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/mywork">
                  My Work
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/login">
                  <i class="fas fa-user-alt fa-lg"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
