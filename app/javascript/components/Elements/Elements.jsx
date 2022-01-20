import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import { getElements } from '../selectors';
import { loadElements } from '../redux/elements';

const Elements = () => {
  const dispatch = useDispatch();
  const elements = useSelector(getElements);
  useEffect(() => elements.length < 1 && dispatch(loadElements()), []);
  return (
    <Carousel>
      {
      elements.map((element) => (
        <Carousel.Item key={element.id}>
          <NavLink to={`/details/${element.id}`} exact>
            <img
              className="d-block w-100"
              src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{element.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <h5 className="text-light">
                <u>Details</u>
              </h5>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      ))
      }
    </Carousel>
  );
};

export default Elements;
