import Container from "@/components/layout/Container";
import React from "react";
import { css } from "root/styled-system/css";

const textClasses = css({
  textAlign: "center",
  fontWeight: "semibold",
  fontSize: "2xl",
});

const centerDiv = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const footerClasses = css({
  padding: "80px 0",
  position: "sticky",
  bottom: "0",
  left: "0",
  background: "zinc.50",
  borderTopWidth: "!thin",
  borderTopColor: "!zinc.300",
  "@media (max-width: 768px)": {
    padding: "20px 0",
  },
});

const Footer = () => {
  return (
    <footer className={footerClasses}>
      <Container>
        <div className={centerDiv}>
          <span className={textClasses}>Some company 2024</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
