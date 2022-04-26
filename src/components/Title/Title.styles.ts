import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { TitleProps } from '~/components/Title/types'

const modifiers = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
}

export const Title = styled.h1<TitleProps>`
  ${({ theme, align }) => css`
    font-size: 4.8rem;
    color: ${theme.colors.slate[800]};

    ${media.greaterThan('medium')`
      font-size: 5.6rem;
    `}

    ${align && modifiers[align]}
  `}
`
