import { useState, useEffect, ReactElement } from 'react';

const TopNavButton = (): ReactElement => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`hover-fade font-bold text-white max-w-max h-min text-center rounded-full bg-gradient-to-r from-[#4411E1] to-[#7537F9] px-[16px] py-[8px] text-[14px] leading-[20px] ml-[8px] 
        ${scrolled && window.innerWidth < 1080 ? `top-nav-button_position transform translate-x-[-140px] translate-y-[-65%]` : 'top-nav-button_position'}`}
      onClick={() => {
        window.open('https://sequence.build/', '_blank', 'noopener,noreferrer');
      }}
    >
      Start building
    </button>
  );
};

export default TopNavButton;