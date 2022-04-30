import styled, { css } from 'styled-components'

import { HeadingProps } from './types'

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

export const Heading = styled.h1<HeadingProps>`
  ${({ theme, align }) => css`
    color: ${theme.colors.slate[800]};

    ${align && modifiers[align]}
  `}
`
