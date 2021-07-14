import React from "react"
import { Link } from "gatsby"
export const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
]

export const NavList = () => {
  return (
    <ul className="navbar-nav  mb-2 mx-md-2 text-uppercase" key={links.id}>
      {links.map(item => {
        const { id, name, link } = item
        return <NavLink id={id} name={name} link={link} />
      })}
    </ul>
  )
}

export const NavLink = ({ id, name, link }) => {
  return (
    <li className="nav-item" key={id}>
      <Link className="nav-link " aria-current="page" href="#" to={link}>
        {name}
      </Link>
    </li>
  )
}
