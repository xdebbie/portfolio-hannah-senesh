import React from "react"

// Featured companies
import vogue from "../images/vogue.png"
import creativeBoom from "../images/creative-boom.png"
import wgsn from "../images/wgsn.png"

// Socials
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const featured = [
    { name: "Vogue", image: vogue},
    { name: "CreativeBoom", image: creativeBoom},
    { name: "WGSN", image: wgsn },
]

const Footer = () => {
    return (
        <footer>
            <div className="featured-companies">
                <div className="container">
                    <ul>
                        {featured.map(({ name, image }) => (
                            <li key="name">
                                <img src={image} alt={name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <div className="inner">
                    <span>© 2020 Hannah Senesh</span>
                    <div className="socials">
                        <a href="#">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                    <span>letscreate@hannahsemesh.com</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer