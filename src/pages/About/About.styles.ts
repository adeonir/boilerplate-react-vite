import styled, { css } from 'styled-components'

export const Page = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[16]};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[8]};
    max-width: 60rem;
    margin-inline: auto;

    h1 {
      margin-bottom: ${theme.spacing[8]};
    }

    p {
      color: ${theme.colors.slate[800]};
      margin-bottom: ${theme.spacing[8]};
      font-size: 1.8rem;
      line-height: 2;
    }

    blockquote {
      color: ${theme.colors.slate[500]};
      margin-bottom: ${theme.spacing[8]};
      font-size: 1.8rem;
      font-style: italic;
    }
  `}
`
