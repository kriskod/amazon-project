/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Product from "../product/Product";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

function Home() {
  const images = [
    "https://cdn.pixabay.com/photo/2017/09/13/17/03/technology-2746212_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/05/06/14/13/pathway-2289978_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/02/23/09/26/sound-4872771_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg",
  ];
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__slider-row">
          <div className="home__slider">
            <Fade>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${images[0]})` }}>
                  <span>
                    <h2>Electronics</h2>
                  </span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${images[1]})` }}>
                  <span>
                    <h2>Garden</h2>
                  </span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${images[2]})` }}>
                  <span>
                    <h2>Fashion</h2>
                  </span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${images[3]})` }}>
                  <span>
                    <h2>Music</h2>
                  </span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${images[4]})` }}>
                  <span>
                    <h2>Sport</h2>
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="AmazonBasics High Speed ​​HDMI 2.0 Cable Single Pack 1.8m Black"
            price={6.81}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71pFDaZU8lL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Xiaomi Mi Electric Scooter foldable electric scooter, made of aviation aluminum, with and without road approval (ABE) (app, max speed 20 - 25 km / h, range up to 30 - 45 km, max load 100 kg)"
            price={399.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71rUqcn4vJL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40 mm) aluminum housing blue, sports strap dark navy blue"
            price={417.7}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71clIIPhRnL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
