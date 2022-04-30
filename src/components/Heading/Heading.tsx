import * as S from './Heading.styles'

import type { HeadingProps } from './types'

export const Heading = ({ children, align, as }: HeadingProps) => (
  <S.Heading align={align} as={as}>
    {children}
  </S.Heading>
)
