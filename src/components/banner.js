import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      milkshake: file(relativePath: { eq: "milkshake.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bowling: file(relativePath: { eq: "bowling.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arcade: file(relativePath: { eq: "arcade.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <Img fluid={data.bowling.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">
                        Hannah Senesh
                    </div>
                    <div className="main-image">
                        <Img fluid={data.milkshake.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.arcade.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">
              Bildkonstnär och fotograf 
            </div>
        </div>
    )
}

export default Banner