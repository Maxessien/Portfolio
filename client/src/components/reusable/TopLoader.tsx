"use client"

import NextTopLoader from 'nextjs-toploader'

const TopLoader = () => {
  return (
    <NextTopLoader color='var(--text-secondary)' showSpinner={false} height={4} />
  )
}

export default TopLoader