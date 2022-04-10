import React from 'react';
import { Main } from '../Main/main';
import { MenuBar } from '../MenuBar/menubar';
import * as C from './styles';

export const Layout = () => {
  return (
    <C.Container>
      <C.Wrapper>
        <MenuBar />
        <Main />
        {/* <C.SideBar/> */}
      </C.Wrapper>
    </C.Container>
  );
};
