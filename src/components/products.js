import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import Image from "gatsby-image"
export const query = graphql`
  {
    items: allContentfulCoffeProduct {
      nodes {
        image {
          fixed(height: 300) {
            ...GatsbyContentfulFixed
          }
          id
          title
        }
        price
        title
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(query)
  const {
    items: { nodes: products },
  } = data

  return (
    <section className="py-5 ">
      <Title title="Our Products"></Title>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {products.map(product => {
            const { price, title } = product
            return (
              <div className="col-10 col-md-6 col-sm-8 col-lg-4">
                <article className="card my-3 border-1 border-secondary ">
                  <div className="card-image-top">
                    <Image fixed={product.image.fixed} className=" w-100" />
                  </div>
                  <h5 className="card-body d-flex justify-content-between mx-2">
                    <div className="card-title display-10">{title}</div>
                    <div className="card-text text-warning">${price}</div>
                  </h5>
                  <div className="justify-content-center align-items-center d-flex">
                    <span className="btn btn-outline-success my-2">
                      Add to Cart
                    </span>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
