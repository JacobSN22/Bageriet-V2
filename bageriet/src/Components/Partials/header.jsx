import React from 'react'
import { HeaderStyle } from './header.style'
import { Nav } from './nav'

export const Header = props => {
  console.log(props);
  return (
    <HeaderStyle>
        <header>
          <Nav />
        </header>
    </HeaderStyle>
    
  )
}
