import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMsg } from './redux/elements';

export default function Message(props) {
  // eslint-disable-next-line react/prop-types
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg);
  return (
    <div>
      <h2>
        The Message from props is
        {' '}
        {msg}
      </h2>
      <button type="button" className="getMessageBtn" onClick={() => dispatch(getRandomMsg())}> Get Random Message</button>
      <h2>
        The Message from store is
        {' '}
        {message.title}
        .
      </h2>
    </div>
  );
}
