import Link from "next/link";
import React from "react";
import { css } from "root/styled-system/css/css";
import ContactButton from "../buttons/ContactButton";

const headerClasses = css({
  width: "100%",
  padding: "3",
  position: "sticky",
  top: "0",
  left: "0",
  background: "zinc.100",
  borderBottomWidth: "!thin",
  borderBottomColor: "!zinc.300",
  zIndex: "20"
});

const navClasses = css({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1536px",
  marginInline: "auto",
});

const logoClasses = css({
  fontWeight: "600",
  fontSize: "xl",
});

const Header = () => {
  return (
    <header className={headerClasses}>
      <nav className={navClasses}>
        <Link className={logoClasses} href="/">
          Some company
        </Link>
        <ContactButton />
      </nav>
    </header>
  );
};

export default Header;
