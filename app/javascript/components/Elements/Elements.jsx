import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getElements } from '../selectors';
import { loadElements } from '../redux/elements';
import Element from './Element';

const Elements = () => {
  const dispatch = useDispatch();
  const elements = useSelector(getElements);
  useEffect(() => elements.length < 1 && dispatch(loadElements()), []);
  return (
    <div>
      {
        elements.map((element) => <Element key={element.id} element={element} />)
      }
    </div>
  );
};

export default Elements;
