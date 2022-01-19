import React from 'react';
import Slider from "react-slick";

export default function Restaurants() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div>
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
      </div>
    );
}
