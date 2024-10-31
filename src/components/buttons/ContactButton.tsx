import React from "react";
import { Button, ButtonProps } from "../ui/button";
import Link from "next/link";

const ContactButton = (props: ButtonProps) => {
  return (
    <Link href="/contact">
      {" "}
      <Button {...props}>Contact us</Button>
    </Link>
  );
};

export default ContactButton;
