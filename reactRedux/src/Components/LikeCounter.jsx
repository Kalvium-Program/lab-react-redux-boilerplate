// LikeCounter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementLike, decrementLike } from './Action';

export const LikeCounter = () => {
  const likeCount = useSelector((state) => state.likeCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Like Counter: {likeCount}</h2>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};




