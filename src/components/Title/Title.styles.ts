import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4.8rem;
    text-align: center;
    color: ${theme.colors.slate[500]};

    ${media.greaterThan('medium')`
      font-size: 5.6rem;
    `}
  `}
`
