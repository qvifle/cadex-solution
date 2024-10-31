import React, { ReactNode } from "react";
import { css } from "root/styled-system/css";

const layoutCss = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
});

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={layoutCss}>{children}</div>;
};

export default Layout;
