import { Outlet } from 'react-router-dom'

import { Navigation } from '~/components/Navigation'

export function Base() {
  const links = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/about',
      label: 'About',
    },
  ]

  return (
    <>
      <Navigation links={links} />

      <Outlet />
    </>
  )
}
