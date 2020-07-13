import React from "react"
import Img from "gatsby-image"
import useGallery from "../hooks/useGallery"

const Gallery = () => {
  const images = useGallery()

  return (
    <div className="gallery">
      {images.map(({ id, fluid, description }) => (
        <Img key={id} fluid={fluid} />
      ))}
      <p className="gallery-description img1">
        This is the laundry description
      </p>
      <p className="gallery-description img2">This is the second description</p>
      <p className="gallery-description img3">This is the third description</p>
      <p className="gallery-description img4">This is the fourth description</p>
      <p className="gallery-description img5">This is the fifth description</p>
      <p className="gallery-description img6">This is the sixth description</p>
      <p className="gallery-description img7">
        This is the seventh description
      </p>
      <p className="gallery-description img8">This is the eighth description</p>
      <p className="gallery-description img9">This is the ninth description</p>
      <p className="gallery-description img10">This is the tenth description</p>
      <p className="gallery-description img11">
        This is the eleventh description
      </p>
      <p className="gallery-description img12">
        This is the twelfth description
      </p>
    </div>
  )
}

export default Gallery
