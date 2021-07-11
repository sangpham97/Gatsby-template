import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"
import Info from "../components/info"
import Category from "../components/Category"
import Menu from "../components/Menu"
import Product from "../components/products"

const IndexPage = ({ data }) => {
  const allCategories = [
    "All",
    ...new Set(data.menu.nodes.map(item => item.category.category)),
  ]

  const [menuItems, setMenuItems] = useState(data.menu.nodes)
  const [categories, setCategories] = useState(allCategories)
  console.log(menuItems)
  const filterItems = category => {
    if (category === "All") {
      setMenuItems(data.menu.nodes)
      return
    }
    const newItems = data.menu.nodes.filter(
      item => item.category.category === category
    )
    setMenuItems(newItems)
  }
  return (
    <Layout>
      <Seo title="Home" />
      <BackgroundSection
        title="regular joe's"
        img={data.img.childImageSharp.fluid}
        styleClass="default_background"
      ></BackgroundSection>
      <Info />
      <Category categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
      <Product />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "background-default.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeItem {
      nodes {
        category {
          category
          id
        }
        id
        description {
          description
        }
        image {
          title
          fixed(height: 100, width: 100) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        price
        title
      }
    }
  }
`

export default IndexPage
