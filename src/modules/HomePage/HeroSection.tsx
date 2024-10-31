import Container from "@/components/layout/Container";
import Video from "@/components/Video";
import React from "react";
import { css } from "root/styled-system/css";

const h1Classes = css({
  fontWeight: "!900",
  fontSize: "!5xl",
  color: "zinc.900",
  lineHeight: "58px",
  marginBottom: "!3",
  "@media (max-width: 1024px)": {
    textAlign: "center",
  },
  "@media (max-width: 640px)": {
    fontSize: "!3xl",
    lineHeight: "36px",
  },
});

const mainSectionTextClasses = css({
  color: "zinc.600",
  maxWidth: "450px",
  "@media (max-width: 1024px)": {
    textAlign: "center",
    marginInline: "!auto",
  },
});

const mainSectionClasses = css({
  background: "zinc.200",
  padding: "40px 0",
});

const mainSectionContainerClasses = css({
  display: "flex",
  justifyContent: "space-between",
  color: "red.300",

  "@media (max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
});

const HeroSection = () => {
  return (
    <section className={mainSectionClasses}>
      <Container className={mainSectionContainerClasses}>
        <div>
          <h1 className={h1Classes}>Most important title on the page</h1>
          <p className={mainSectionTextClasses}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </p>
        </div>
        <Video />
      </Container>
    </section>
  );
};

export default HeroSection;
