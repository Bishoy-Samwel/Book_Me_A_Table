/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import React from 'react';
import { getElementById } from '../selectors';
import { data } from '../data';

const Details = () => {
  const itemId = Number(useParams().itemId);
   console.log(itemId, 'sdadfsdf')
  // const element = useSelector(getElementById(itemId));
  // console.log(element, 'elele')
  // const detailsLoading = useSelector(detailsLoading);

  // if (!detailsLoading && element.elemData) {
  //   return (element.elemData.map(
  //     (detail) => <detail key={element.anime_id} detail={detail.fact} />));
  // }
  return (
    <>
      {
        data.map((item, id) => {
          if(item.id == itemId){
            return (
              <div>
                <span>{item.img}</span>
                <h1>{item.id}</h1>
                <h3>{item.title}</h3>
                <span>{item.desc}</span>
              </div>
            )
          }
        })
      }
    </>
  );
};

// Element.propTypes = {
//   element: PropTypes.shape.isRequired,
// };

export default Details;
