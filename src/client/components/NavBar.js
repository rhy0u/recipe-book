import React from 'react'
import styled, { up, css } from '@xstyled/styled-components'
import { NavLink } from 'react-router-dom'
import * as routePaths from 'client/utils/routePaths'

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 48px;
  background-color: #1a76d2;
  align-items: center;
  box-shadow: 0px 6px 48px -12px rgba(0, 0, 0, 0.75);
  z-index: 3;
  a {
    margin: 0 10px;
    user-select: none;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 16rpx;
    text-align: center;
    ${up(
      'md',
      css`
        font-size: 20rpx;
        margin: 0 40px;
      `,
    )}
    padding: 8px;
    border-radius: 4px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    &.selected {
      text-decoration: underline;
    }
    transition: background-color 0.3s;
  }
`

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLink exact to={routePaths.home()} activeClassName="selected">
        Liste des recettes
      </NavLink>
      <NavLink to={routePaths.addRecipe()} activeClassName="selected">
        Ajouter une recette
      </NavLink>
    </NavBarWrapper>
  )
}

export default NavBar
