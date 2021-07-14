import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"
import PageMark from "../components/posts-layout"

const About = ({ data }) => {
  const markDown = data.allMarkdownRemark.nodes
  console.log(markDown)

  return (
    <>
      <Layout>
        <Seo title="About" />
        <BackgroundSection
          title="About us"
          img={data.img.childImageSharp.fluid}
          styleClass="about-background"
        >
          <Link to="/" className="btn btn-outline-dark p-2 text-uppercase my-3">
            Go back to the homepage
          </Link>
        </BackgroundSection>
        <PageMark markDown={markDown} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { author: { ne: null } } }) {
      nodes {
        html
        frontmatter {
          author
          title
          date
          slug
        }
      }
    }
  }
`

export default About
