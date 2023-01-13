import { FC } from "react";
import "./layout.scss";
// components
import Header from "../header/header";
// type
type LayoutProps = {
  children: JSX.Element;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="m-layout">
      <Header />
      <main className="m-layout__container">{children}</main>
    </div>
  );
};

export default Layout;
