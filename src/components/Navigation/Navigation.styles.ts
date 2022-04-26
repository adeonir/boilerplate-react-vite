import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacing[8]};
    background: ${theme.colors.slate[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing[8]};
  `}
`

export const NavLink = styled(RouterNavLink)`
  ${({ theme }) => css`
    font-size: 3rem;
    transition: 200ms ease-in-out;
    border-bottom: 2px solid ${theme.colors.transparent};

    &:hover {
      color: ${theme.colors.slate[600]};
    }

    &.active {
      color: ${theme.colors.slate[700]};
      border-color: ${theme.colors.slate[700]};
    }
  `}
`
