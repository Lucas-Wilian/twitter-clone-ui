import React from 'react';
import * as C from './styles';
import { Tweet } from '../Tweet/tweet';

export const Feed = () => {
  return (
    <C.Container>
      <C.Tab>Tweets</C.Tab>
      <C.Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </C.Tweets>
    </C.Container>
  );
};
