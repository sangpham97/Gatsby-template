import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const BackgroundSection = ({ title, img, children, styleClass }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div>
        <h1 className="text-uppercase display-4">{title}</h1>
      </div>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
