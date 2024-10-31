import React, { ReactNode } from "react";
import { css } from "root/styled-system/css";

const mainClasses = css({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

const Main = ({ children }: { children: ReactNode }) => {
  return <main className={mainClasses}>{children}</main>;
};

export default Main;
