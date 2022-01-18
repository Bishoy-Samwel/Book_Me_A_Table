/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { PropTypes } from 'prop-types';

const Element = (props) => {
  const { element } = props;
  return (
    <div key={element.id}>
      <h1>{element.name}</h1>
      <NavLink to={`/details/${element.id}`} exact>
        Details
      </NavLink>
    </div>
  );
};

export default Element;

// Element.propTypes = {
//   element: PropTypes.shape.isRequired,
// };
