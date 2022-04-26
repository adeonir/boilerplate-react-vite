import * as S from './Title.styles'

import type { TitleProps } from './types'

export const Title = ({ children, ...props }: TitleProps) => (
  <S.Title {...props}>{children}</S.Title>
)
