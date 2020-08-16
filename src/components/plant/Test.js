import React, { Component } from "react";
import Swiper from "react-id-swiper";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.js";

const cld = new cloudinary.Cloudinary({
  cloud_name: "eitanpeer"
});

const imageSources = [
  "http://lorempixel.com/1600/1200/nature/1/",
  "http://lorempixel.com/1600/1200/nature/2/",
  "http://lorempixel.com/1600/1200/nature/3/",
  "http://lorempixel.com/1600/1200/nature/4/",
  "http://lorempixel.com/1600/1200/nature/5/",
  "http://lorempixel.com/1600/1200/nature/6/"
];

export default class LazyloadImage extends Component {
  render() {
    const params = {
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    return (
      <div>
        <Swiper {...params}>
          {imageSources.map(imgSrc => (
            <div key={imgSrc}>
              <img
                alt="img"
                style={{
                  width: "100%"
                }}
                data-srcset={cld
                  .imageTag(imgSrc, {
                    type: "fetch",
                    quality: "auto",
                    fetchFormat: "auto",
                    effect: "sepia",
                    srcset: {
                      breakpoints: [300, 600, 900, 1200],
                      sizes: true
                    }
                  })
                  .getAttr("srcset")}
                className="swiper-lazy"
                sizes="(max-width: 300px) 300px, (max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}