import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getElements } from '../selectors';
import { loadElements } from '../redux/elements';

const Elements = () => {
  const dispatch = useDispatch();
  const elements = useSelector(getElements);
  useEffect(() => elements.length < 1 && dispatch(loadElements()), []);
  return (
    <div>
      {
        elements.map((element) => <h1 key={element.id}>{element.name}</h1>)
      }
    </div>
  );
};

export default Elements;
