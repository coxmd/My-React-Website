import React from "react";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Providing Web development services with 1 and a Half Years of
                Experience. Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interfaces.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Backend API Development.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Search Engine optimization.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon">
              Backend <br /> Developer
            </i>
            <h3 className="services__title"></h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Providing Web development services with 1 and a Half Years of
                Experience. Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interfaces.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Backend API Development.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Search Engine optimization.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Search Engine <br /> Optimization
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">
                Search Engine Optimization
              </h3>
              <p className="services__modal-description">
                Providing Web development services with 1 and a Half Years of
                Experience. Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interfaces.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Backend API Development.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Search Engine optimization.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
