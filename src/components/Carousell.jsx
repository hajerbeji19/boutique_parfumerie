import React from 'react'

import boutique1 from '../assets/boutique1.jpg'
import boutique2 from '../assets/boutique2.jpg'
import boutique3 from '../assets/boutique3.jpg'

const Carousell = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      {/* Indicateurs */}
      <div className="carousel-indicators">

        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
        ></button>

      </div>

      {/* Images */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">

          <img
            src={boutique1}
            className="d-block w-100 hero-image"
            alt="Fashion products"
          />

          <div className="carousel-caption text-start">

            <h1 className="fw-bold">
              Luxury at 
              <br />
              Every Drop
            </h1>

            <p>
              Explore our latest collection of elegant and captivating perfumes.
            </p>

            <button className="btn btn-primary">
              Shop Now →
            </button>

          </div>

        </div>

        {/* Slide 2 */}
        <div className="carousel-item">

          <div className="hero-container">

            <img
              src={boutique2}
              className="d-block w-100 hero-image"
              alt="Perfume"
            />

            <div className="hero-overlay"></div>

          </div>

          <div className="carousel-caption text-start">

            <h1 className="fw-bold">
              Luxury at 
              <br />
              Every Drop
            </h1>

            <p>
              Explore our latest collection of elegant and captivating perfumes.
            </p>

            <button className="btn btn-primary">
              Shop Now →
            </button>

          </div>

        </div>

        {/* Slide 3 */}
        <div className="carousel-item">

          <div className="hero-container">

            <img
              src={boutique3}
              className="d-block w-100 hero-image"
              alt="Perfume"
            />

            <div className="hero-overlay"></div>

          </div>

          <div className="carousel-caption text-start">

            <h1 className="fw-bold">
              Luxury at 
              <br />
              Every Drop
            </h1>

            <p>
              Explore our latest collection of elegant and captivating perfumes.
            </p>

            <button className="btn btn-primary">
              Shop Now →
            </button>

          </div>

        </div>

      </div>

      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  )
}

export default Carousell