import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import { css } from "root/styled-system/css";

const containerClasses = css({
  maxWidth: "1536px",
  marginInline: "auto",
  padding: { "2xlDown": "3" },
});

const Container = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(containerClasses, className)}>{children}</div>;
};

export default Container;
