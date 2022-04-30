import { ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
