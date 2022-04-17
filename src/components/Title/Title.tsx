import * as S from './Title.styles'

export type TitleProps = {
  children: string
}

export const Title = ({ children }: TitleProps) => <S.Title>{children}</S.Title>
