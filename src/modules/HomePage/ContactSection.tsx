import ContactButton from "@/components/buttons/ContactButton";
import Container from "@/components/layout/Container";
import React from "react";
import { css } from "root/styled-system/css";

const sectionClasses = css({
  padding: "80px 0",
  background: "zinc.100",

});

const headingClasses = css({
  fontSize: "!3xl",
  textAlign: "center",
  fontWeight: "!semibold",
  marginBottom: "!3",
});

const centerDiv = css({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const ContactSection = () => {
  return (
    <section className={sectionClasses}>
      <Container>
        <h3 className={headingClasses}>Less important title</h3>
        <div className={centerDiv}>
          <ContactButton />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
