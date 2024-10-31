"use client";
import ContactForm from "@/components/forms/ContactForm";
import { useState } from "react";
import { css } from "root/styled-system/css";

const headingClasses = css({
  fontSize: "!5xl",
  fontWeight: "!semibold",
  textAlign: "center",
  marginBottom: "!4",
  lineHeight: "54px",
  "@media (max-width: 768px)": {
    fontSize: "!4xl",
    lineHeight: "36px",
  },
});

const sectionClasses = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "!100%",
  flexGrow: "1",
  height: "!100%",
  background: "zinc.200",
});

const ContactPage = () => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  return (
    <section className={sectionClasses}>
      <h1 className={headingClasses}>{message ?? "Only CTA on the page"}</h1>
      {!message && <ContactForm updateTitle={setMessage} />}
    </section>
  );
};

export default ContactPage;
