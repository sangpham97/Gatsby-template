import React from "react"
import logo from "../images/gatsby-icon.png"
import { FaCartArrowDown } from "react-icons/fa"
import { Link } from "gatsby"
import { NavList } from "./contrast/links"
import Auth0 from "./Auth0"

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
    <div className="container">
      <Link className="navbar-brand" href="/">
        <img src={logo} alt="" className="logo-brand" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="mx-auto"></div>
        <NavList />
        <FaCartArrowDown className="text-primary cart  snipcart-checkout mx-4" />
        <Auth0 />
      </div>
    </div>
  </nav>
)

export default Header
