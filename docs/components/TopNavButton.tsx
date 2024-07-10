import { ReactElement } from "react";

const TopNavButton = (): ReactElement => {
  return (
    <button
      className="hover-fade font-bold text-white max-w-max h-min text-center rounded-full bg-gradient-to-r from-[#4411E1] to-[#7537F9] px-[16px] py-[8px] text-[14px] leading-[20px] ml-[8px] top-nav-button_position"
      onClick={() => {
        window.open("https://sequence.build/", "_blank");
      }}
    >
      Start building
    </button>
  );
};

export default TopNavButton;