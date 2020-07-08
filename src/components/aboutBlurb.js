import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                  <div className="content">
                    <h3>Förmågan att skapa</h3>
                    <p>Retro (franska rétro, från rétrospectif, bakåtblickande, ytterst från latin) syftar på att inpireras av eller intressera sig för en tidigare eras trender, moden eller teknologi. Man talar till exempel om retromode, retroanu, retrobilar och retrodatorer. Den som gillar det som är retro kallas för retrofil, och behöver inte själv ha varit med om den tid som favoriseras. När ett flygbolag har ett flygplan målat enligt gammal grafisk profil kallas det retrojet. Inom mode syftar retro på nyproducerade plagg i en stil inspirerad av tidigare tidsperiod. Termen vintage syftar däremot på plagg som faktiskt tillverkats under den specifika tidsperioden. I svenskan har även ordet retro ibland använts som förkortning för retroaktiv, främst retrolön för retroaktiv lön. Inom fotografi används termen repro för nytillverkning av fotografi baserad på en äldre förlaga.</p>
                    <div className="btn-row">
                      <Link to="/work">Visa serien</Link>
                    </div>
                  </div>
                  <div className="images">
                    <div className="top-right">
                      <Img fluid={data.fist.childImageSharp.fluid}/>
                    </div>
                    <div className="bottom-left">
                      <Img fluid={data.flower.childImageSharp.fluid}/>
                    </div>
                  </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default AboutBlurb