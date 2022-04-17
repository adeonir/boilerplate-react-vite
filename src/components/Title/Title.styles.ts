import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4.8rem;
    color: ${theme.colors.slate[900]};

    ${media.greaterThan('medium')`
      font-size: 5.6rem;
    `}
  `}
`
