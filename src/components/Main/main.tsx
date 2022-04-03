import React from 'react'
import * as C from './styles'

export const Main = () => {
  return (
    <C.Container>
      <C.Header>
        <button>
          <C.BackIcon/>
        </button>

        <C.ProfileInfo>
          <strong>Lucas Wilian R. S</strong>
          <span>26 Tweets</span>
        </C.ProfileInfo>
      </C.Header>
      {/* <C.ProfilePage/> */}
      <C.BottomMenu>
        <C.HomeIcon className='active'/>
        <C.SearchIcon/>
        <C.BellIcon/>
        <C.EmailIcon/>
      </C.BottomMenu>

    </C.Container>
  )
}
