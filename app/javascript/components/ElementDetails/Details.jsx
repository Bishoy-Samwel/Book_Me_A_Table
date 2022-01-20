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
  console.log(itemId);
  const element = useSelector(getElementById(itemId));
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
              <img src="https://via.placeholder.com/975x678" className="img-fluid" alt="menu" />
            </div>
          </div>

          <div className="col-md">
            <div className="menu-text flex-grow-1 py-4 px-5">
              <h2 className="main-title text-left">Golf Ter</h2>
              <hr className="hr-style-left" />
              <div className="d-flex justify-content-between">
                <p className=" text-uppercase font-weight-bold">GOlfy</p>
                <p>$200.00</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">GOlfy</p>
                <p> $200.00</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">GOlfy</p>
                <p>$200.00</p>
              </div>

              <div className="menu-content d-flex justify-content-between">
                <p className="text-uppercase font-weight-bold">Kimbap</p>
                <p> $200.00</p>
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
