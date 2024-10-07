import { useState, useEffect, type ReactElement } from 'react'

const TopNavButton = (): ReactElement => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a
      className="hover-fade font-bold text-white max-w-max h-min text-center pr-[120px] py-[8px] text-[12px] leading-[20px] ml-[8px] top-nav-button_position"
      onClick={() => {
        window.open('https://sequence.build/', '_blank', 'noopener,noreferrer')
      }}
    >
      Build
    </a>
  )
}

export default TopNavButton
