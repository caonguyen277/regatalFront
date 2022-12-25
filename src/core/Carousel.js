import React from "react";
import regatal5 from "../img/regatal5.jpg"
import regatal6 from "../img/regatal7.jpg"
import regatal7 from "../img/regatal6.jpg"
import { Carousel, Container } from "react-bootstrap";
const ControlledCarousel = () => {
  const style = {
    color : "black"
  }
  return (
    <Container>
      <Carousel fade variant="dark">
      <Carousel.Item>
        <img
        style={{maxWidth: '100%', maxHeight: 800, border: 'none'}}
          className="img-fluid d-block w-100"
          src={regatal5}
          alt="First slide"
        />
        <Carousel.Caption style={style}>
          {/* <h5>SKINSHOT Bioactive Collagen Shot</h5> */}
          {/* <p>Nước uống Collagen đẹp da trị nám</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-xs-center text-lg-center">
        <img
        style={{maxWidth: '100%', maxHeight: 800, border: 'none'}}
          className="img-fluid d-block w-100"
          src={regatal6}
          alt="Second slide"
        />
        <Carousel.Caption style={style}>
          {/* <h5>La Mer</h5> */}
          {/* <p>Thương hiệu đồ mỹ phẩm hàng đầu</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{maxWidth: '100%', maxHeight: 800, border: 'none'}}
          className="img-fluid d-block w-100"
          src={regatal7}
          alt="Third slide"
        />
        <Carousel.Caption style={style} >
          {/* <h5>VALMONT Magic Advent Calendar Limited Edition</h5>
          <p>
            
Trải nghiệm bộ sản phẩm chăm sóc da phiên bản giới hạn Magic Advent Calendar đến từ Valmont
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default ControlledCarousel;