import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { trendingProducts } from '../Context/Data1'

const trendingSlider = () => {


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="sliderConrainer my-5 ">

        <Slider {...settings}>
          {trendingProducts.map(
            (product, indx) =>
              <div key={indx} className='flex justify-center items-center gap-5 object-cover h-50 w-70' >
                <img src={product.image} alt="nothing ..." className='h-50 overflow-hidden rounded-xl' />
              </div>
          )}
        </Slider>

      </div>
    </>
  )
}

export default trendingSlider