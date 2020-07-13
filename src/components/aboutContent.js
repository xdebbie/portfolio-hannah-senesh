import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      cold: file(relativePath: { eq: "cold.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about">
      <div className="container">
        <div className="image-left">
          <div className="hannah-image">
            <Img fluid={data.cold.childImageSharp.fluid} />
          </div>
        </div>
        <div className="text-right">
          <div className="main-text">Hej. Jag är Hannah.</div>
          <p>
            Jag föddes 1990 i Luleå, Sverige och växte upp i Stockholm på
            nittiotalet. Jag har en äldre syster och sedan en tidig ålder har
            jag varit fascinerad av Stockholms gatukultur bland ungdomarna. 2008
            hade jag min första praktik på Elle magazine. Ett år senare åkte jag
            till Lunds universitet för att studera teater och konst. Jag
            specialiserade mig på fotografi och semiotik, och några av mitt
            arbete började tryckas på den amerikanska tidningen Vogue, som
            öppnade dörrarna för mig. Från och med idag har jag haft mina tryck
            i över 30 tidskrifter i åtta länder.
          </p>
        </div>
      </div>
      <div className="fixed-misc">Bildkonstnär och fotograf</div>
    </div>
  )
}

export default About
