import React from "react"
import Image from "gatsby-image"

export default function Product({ price, title, img, id }) {
  return (
    <div className="col-10 col-md-6 col-sm-8 col-lg-3">
      <article className="card border-1 border-secondary">
        <div className="card-image-top">
          <Image fixed={img} className=" w-100" />
        </div>
        <h5 className="card-body">
          <div className="card-title ">{title}</div>
          <div className="card-text text-danger lead">${price}</div>
          <div className="justify-content-center align-items-center ">
            <button
              className="btn btn-outline-success my-2 d-block snipcart-add-item"
              data-item-id={id}
              data-item-name={title}
              data-item-price={price}
              data-item-image={img.src}
              data-item-url="https://gatsby-project-contentful.netlify.app"
            >
              Add to Cart
            </button>
          </div>
        </h5>
      </article>
    </div>
  )
}
