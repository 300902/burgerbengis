import Carousel from 'react-bootstrap/Carousel';
import posterImage from '../assets/image/poster.png';
import promoImage from '../assets/image/promo.png';
import postImage from '../assets/image/Post.png';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
  <img
    className="d-block w-80 img-fluid"
    src={posterImage}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={promoImage}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={postImage}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;