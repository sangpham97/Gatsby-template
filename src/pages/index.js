import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"
import Info from "../components/info"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <BackgroundSection
      title="regular joe's"
      img={data.img.childImageSharp.fluid}
      styleClass="default_background"
    ></BackgroundSection>
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background-default.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
