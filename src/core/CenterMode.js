import React from "react";
import Slider from "react-slick";
import ShowImage from "./ShowImage";

export default function CenterMode({product}){
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <ShowImage item={product} url="product" path = {product.photo.data[i]}/>
          </a>
        );
      },
      dots: true,
      // dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log(product);
    return (
      <div>
        <Slider {...settings}>
          {
            product &&
            product.photo.data.map((el,index) => {
                return (
                    <div>
                        <ShowImage item={product} url="product" path = {el}/>
                    </div>  
                )    
        })
        }
        </Slider>
      </div>
    );
}