import React from 'react'

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row align-items-start">

          {/* Logo et description */}
          <div className="col-md-4 mb-3">
            <h4 className="footer-title">PARFUMS</h4>
            <p>Fashion • Style • You</p>
          </div>

          {/* Liens */}
          <div className="col-md-3 mb-3">
            <h5>About us</h5>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-5 mb-3">
            <h5>Follow us</h5>

            <div className="social-icons">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 My Store. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer