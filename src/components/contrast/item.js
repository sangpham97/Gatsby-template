import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function Item({ menuItem, index }) {
  return (
    <div className="col-12 col-md-6 g-3">
      <article key={index} className="card card-product">
        <Link to={`/${menuItem.image.title}`}>
          <Image
            fixed={menuItem.image.fixed}
            alt=""
            className="img-fluid m-2"
          />
        </Link>
        <div className="card-body">
          <header className="d-flex justify-content-between ">
            <h5 className="card-title">{menuItem.title}</h5>
            <h5 className="card-text text-warning ">${menuItem.price}</h5>
          </header>
          <p className="card-text">{menuItem.description.description}</p>
          <div className="btn bg-secondary">
            <span className="text-light">{menuItem.category.category}</span>
          </div>
        </div>
      </article>
    </div>
  )
}
