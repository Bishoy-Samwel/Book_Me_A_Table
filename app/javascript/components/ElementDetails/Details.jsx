/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import React from 'react';
import { getElementById, isLoading } from '../selectors';
import './Details.css';

const Details = () => {
  const itemId = Number(useParams().itemId);
  const element = useSelector(getElementById(itemId));
  const {country, city, address, price, phone} = element;
  console.log(itemId, element);
  // const detailsLoading = useSelector(isLoading);

  // if (!detailsLoading && element.elemData) {
  //   return (element.elemData.map(
  //     (detail) => <detail key={element.anime_id} detail={detail.fact} />));
  // }
  return (
    <section id="details">
      <div className="fluid-container">
        <div className="row no-gutters">
          <div className="col-md">

            <div className="h-100 d-flex align-items-start">
              <img
                className="img-fluid"
                src={element.img_url}
                alt="First slide"
              />
            </div>
          </div>

          <div className="col-md">
            <div className="menu-text flex-grow-1 px-2">
              <h2 className="main-title text-left">{element.name}</h2>
              <hr className="hr-style-left" />
              <div className="d-flex justify-content-between">
                <p className=" text-uppercase font-weight-bold">Country</p>
                <p>{country}</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">City</p>
                <p>{city}</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">Address</p>
                <p>{address}</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">Price</p>
                <p>{price}</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">Phone</p>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

// Element.propTypes = {
//   element: PropTypes.shape.isRequired,
// };

export default Details;
