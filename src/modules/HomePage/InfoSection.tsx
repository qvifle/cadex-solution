import ContactButton from "@/components/buttons/ContactButton";
import Container from "@/components/layout/Container";
import React from "react";
import { css } from "root/styled-system/css/css";

const h2Classes = css({
  fontWeight: "!700",
  fontSize: "!4xl",
  textAlign: "center",
  marginBottom: "!40px",
  lineHeight: "!42px",
});

const sectionClasses = css({
  padding: "40px 0",
});

const itemsClasses = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8",
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

const itemClasses = css({
  maxWidth: "280px",
  marginInline: "auto",
  marginBottom: "10",
});

const itemTitleClasses = css({
  fontSize: "20px",
  fontWeight: "500",
});

const itemTextClasses = css({
  color: "zinc.400",
});

const centerDiv = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const InfoSection = () => {
  return (
    <section className={sectionClasses}>
      <Container>
        <h2 className={h2Classes}>Also very important title</h2>
        <div className={itemsClasses}>
          {Array.from({ length: 6 }).map((el, key) => (
            <div className={itemClasses} key={key}>
              <span className={itemTitleClasses}>Title</span>
              <p className={itemTextClasses}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et con
              </p>
            </div>
          ))}
        </div>
        <div className={centerDiv}>
          <ContactButton />
        </div>
      </Container>
    </section>
  );
};

export default InfoSection;
