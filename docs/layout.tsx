import { ReactElement } from "react";
import TopNavButton from "./components/TopNavButton";

const Layout = ({ children }: { children: ReactElement | string }) => {
  return (
    <div>
      <TopNavButton />
      {children}
    </div>
  );
};

export default Layout;