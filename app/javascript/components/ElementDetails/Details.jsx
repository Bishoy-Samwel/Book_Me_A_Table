/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import React from 'react';
import { getElementById } from '../selectors';

const Details = () => {
  const itemId = Number(useParams().itemId);
  const element = useSelector(getElementById(itemId));
  // const detailsLoading = useSelector(detailsLoading);

  // if (!detailsLoading && element.elemData) {
  //   return (element.elemData.map(
  //     (detail) => <detail key={element.anime_id} detail={detail.fact} />));
  // }
  return (
    <h1>
      {element.id}
      ,
      {' '}
      {element.name}
    </h1>
  );
};

// Element.propTypes = {
//   element: PropTypes.shape.isRequired,
// };

export default Details;
