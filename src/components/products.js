import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import SearchBar from "./SearchBar"
import Product from "../components/contrast/product"

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
        <SearchBar
          products={products}
          setFilteredData={setFilteredData}
          wordEntered={wordEntered}
          setWordEntered={setWordEntered}
        />

        <div className="row justify-content-center align-items-center g-3">
          {filteredData.map(product => {
            const { price, title } = product
            const img = product.image.fixed
            const id = product.image.id
            return <Product price={price} img={img} title={title} id={id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
