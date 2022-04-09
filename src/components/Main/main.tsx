import React from 'react';
import * as C from './styles';
import { ProfilePage } from '../ProfilePage/profilepage';

export const Main = () => {
  return (
    <C.Container>
      <C.Header>
        <button>
          <C.BackIcon />
        </button>

        <C.ProfileInfo>
          <strong>Lucas Wilian R. S</strong>
          <span>26 Tweets</span>
        </C.ProfileInfo>
      </C.Header>
      <ProfilePage />
      <C.BottomMenu>
        <C.HomeIcon className='active' />
        <C.SearchIcon />
        <C.BellIcon />
        <C.EmailIcon />
      </C.BottomMenu>
    </C.Container>
  );
};
