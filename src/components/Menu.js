import React from "react"
import Image from "gatsby-image"
import PropsType from "prop-types"
export default function Menu({ items }) {
  return (
    <div className="container">
      <div className="row ">
        {items.map(menuItem => {
          return (
            <div className="col-12 col-md-6 g-3">
              <article key={menuItem.id} className="card card-product">
                <Image
                  fixed={menuItem.image.fixed}
                  alt=""
                  className="img-fluid m-2"
                />
                <div className="card-body">
                  <header className="d-flex justify-content-between">
                    <h5 className="card-title">{menuItem.title}</h5>
                    <h5 className="card-text ">${menuItem.price}</h5>
                  </header>
                  <p className="card-text">
                    {menuItem.description.description}
                  </p>
                  <p className="btn-outline-warning btn">
                    {menuItem.category.category}
                  </p>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}
