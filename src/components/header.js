import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">SENESH</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">Handla om</Link>
            <Link to="/work">Arbete</Link>
            <Link to="/contact">Kontakt</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
