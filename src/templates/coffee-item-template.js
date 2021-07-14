import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

function CoffeItem({ data }) {
  console.log(data)

  const { title, price } = data.contentfulCoffeItem
  const { category } = data.contentfulCoffeItem.category
  const { description } = data.contentfulCoffeItem.description

  return (
    <Layout>
      <Seo title={title}></Seo>
      <div className="my-5">
        <Title title={title} />
        <div className="conatainer-fluid mt-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-10 col-md-5 col-lg-4">
              <Image
                fluid={data.contentfulCoffeItem.image.fluid}
                className="img-fluid"
              ></Image>
            </div>
            <div className="col-10 col-md-6 col-lg-7">
              <h4 className="display-md-5 mt-2">Details:</h4>
              <p className="lead text-md-muted text-center text-md-start">
                {description}
              </p>
              <p className="display-8 fw-bold">Price:${price}</p>
              <p className="btn-success btn " disabled>
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleItem($title: String) {
    contentfulCoffeItem(image: { title: { eq: $title } }) {
      image {
        title
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      title
      price
      category {
        category
      }
      description {
        description
      }
    }
  }
`

export default CoffeItem
