import React from 'react'

import french_club from '../assets/french_club.jpg'
import my_way from '../assets/my_way.jpg'
import eternity from '../assets/eternity.jpg'
import coco_chanel from '../assets/coco_chanel.jpg'

const Products = () => {
  return (
    <section className="container py-4">

      <h2 className="text-center fw-bold mb-4">
        Featured Products
      </h2>

      <div className="row g-4">

        {/* Produit 1 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card product-card h-100">

            <img
              src={french_club}
              className="card-img-top product-image"
              alt="French Club"
            />

            <div className="card-body text-center">

              <h5 className="card-title">
                French Club
              </h5>

              <p className="fw-bold">
                $49.99
              </p>

              <button className="btn btn-primary w-75">
                Add to Cart
              </button>

            </div>

          </div>
        </div>


        {/* Produit 2 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card product-card h-100">

            <img
              src={my_way}
              className="card-img-top product-image"
              alt="My Way"
            />

            <div className="card-body text-center">

              <h5 className="card-title">
                My Way
              </h5>

              <p className="fw-bold">
                $79.99
              </p>

              <button className="btn btn-primary w-75">
                Add to Cart
              </button>

            </div>

          </div>
        </div>


        {/* Produit 3 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card product-card h-100">

            <img
              src={eternity}
              className="card-img-top product-image"
              alt="Eternity"
            />

            <div className="card-body text-center">

              <h5 className="card-title">
                Eternity
              </h5>

              <p className="fw-bold">
                $39.99
              </p>

              <button className="btn btn-primary w-75">
                Add to Cart
              </button>

            </div>

          </div>
        </div>


        {/* Produit 4 */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card product-card h-100">

            <img
              src={coco_chanel}
              className="card-img-top product-image"
              alt="Coco Chanel"
            />

            <div className="card-body text-center">

              <h5 className="card-title">
                Coco Chanel
              </h5>

              <p className="fw-bold">
                $59.99
              </p>

              <button className="btn btn-primary w-75">
                Add to Cart
              </button>

            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Products