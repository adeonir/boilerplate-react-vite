import * as S from './Navigation.styles'

import type { NavigationProps } from './types'

export function Navigation({ links }: NavigationProps) {
  return (
    <S.Nav>
      {links.map(({ to, label }) => (
        <S.NavLink key={label} to={to}>
          {label}
        </S.NavLink>
      ))}
    </S.Nav>
  )
}
