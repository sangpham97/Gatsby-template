import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import Image from "gatsby-image"
import SearchBar from "./SearchBar"

export const query = graphql`
  {
    items: allContentfulCoffeProduct {
      nodes {
        image {
          fixed(height: 300) {
            src
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
  const [filteredData, setFilteredData] = useState(products)
  const [wordEntered, setWordEntered] = useState("")

  return (
    <section className="py-5 ">
      <Title title="Our Products"></Title>
      <div className="container">
        <div className="row my-4">
          <div className="col-10 col-md-8 col-lg-6 mx-auto">
            <SearchBar
              products={products}
              setFilteredData={setFilteredData}
              wordEntered={wordEntered}
              setWordEntered={setWordEntered}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-3">
          {filteredData.map(product => {
            const { price, title } = product

            return (
              <div className="col-10 col-md-6 col-sm-8 col-lg-3">
                <article className="card border-1 border-secondary">
                  <div className="card-image-top">
                    <Image fixed={product.image.fixed} className=" w-100" />
                  </div>
                  <h5 className="card-body">
                    <div className="card-title ">{title}</div>
                    <div className="card-text text-danger lead">${price}</div>
                    <div className="justify-content-center align-items-center ">
                      <button
                        className="btn btn-outline-success my-2 d-block snipcart-add-item"
                        data-item-id={product.image.id}
                        data-item-name={title}
                        data-item-price={price}
                        data-item-image={product.image.fixed.src}
                        data-item-url="https://gatsby-project-contentful.netlify.app"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </h5>
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
