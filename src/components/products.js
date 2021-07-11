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
            ...GatsbyContentfulFixed_tracedSVG
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
        <div className="row ">
          {products.map(product => {
            const { price, title } = product
            return (
              <div className="col-10 col-md-6 col-sm-8 col-lg-4 my-3 mx-auto">
                <article className="card my-3 ">
                  <div className="card-image-top">
                    <Image fixed={product.image.fixed} className=" w-100" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h3 className="card-text">${price}</h3>
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
