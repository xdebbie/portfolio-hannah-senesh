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
      sonic: file(relativePath: { eq: "sonic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pop: file(relativePath: { eq: "pop.png" }) {
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
                        <Img fluid={data.sonic.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">
                        Hannah Senesh
                    </div>
                    <div className="main-image">
                        <Img fluid={data.milkshake.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.pop.childImageSharp.fluid} />
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