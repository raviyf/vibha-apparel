import { Image as MedusaImage } from "@medusajs/medusa"
import React, { useState } from "react"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }
  return (
    <div className="flex pl-12 items-start relative">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className="flex lg:flex-row flex-1 lg:pt-10 small:mx-1 gap-x-10">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              // className="relative w-48 h-52 sm:w-64 sm:h-96 md:w-96 md:h-96 overflow-hidden bg-ui-bg-subtle"
              className="flex item-center w-32 h-[512px] sm:w-64 sm:h-96 md:w-[270px] md:h-[640px] lg:w-[470px]  lg:h-[680px] overflow-hidden bg-ui-bg-subtle"
              id={image.id}
            >
              <Image
                src={images[activeIndex].url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Container>
          )
        })}
        <button
          onClick={nextSlide}
          className="carousel__btn carousel__btn--next"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default ImageGallery
