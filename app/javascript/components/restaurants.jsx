import React from 'react';
import Restaurant from './restaurant';
import { data } from './data';


export default function Restaurants() {

    return (
      <>
        <h1>All Restaurant</h1>
        {
          data.map((item, id) => {
            return (
              <div key={item.id}>
                <Restaurant img={item.img} desc={item.desc} title={item.title} id={item.id} /> 
              </div>
            )
          })
        }
      </>
    );
}



{/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
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
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

{/* <div>
<h2> Multiple items </h2>
<Slider {...settings}>
  <div>
      <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
      <h3>1</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>2</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>3</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>4</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>5</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>6</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>7</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>8</h3>
  </div>
  <div>
  <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg'></img>
    <h3>9</h3>
  </div>
</Slider>
</div> */}