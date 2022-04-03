import React from 'react'
import { Main } from '../Main/main'
import * as C from './styles'

export const Layout = () => {
  return (
    <C.Container>
      <C.Wrapper>
        {/* <C.MenuBar/> */}
        <Main/>
        {/* <C.SideBar/> */}
      </C.Wrapper>
    </C.Container>
  )
}
