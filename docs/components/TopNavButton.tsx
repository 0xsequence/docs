import type { ReactElement } from 'react'

const TopNavButton = (): ReactElement => {
  return (
    <a
      className="hover-fade font-bold text-white max-w-max h-min text-center pr-[60px] py-[8px] text-[12px] leading-[20px] ml-[8px] top-nav-button_position"
      onClick={() => {
        window.open('https://sequence.build/', '_blank')
      }}
    >
      Create Account
    </a>
  )
}

export default TopNavButton
