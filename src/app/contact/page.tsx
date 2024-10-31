import ContactPage from "@/modules/ContactPage";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

const Page = () => {
  return <ContactPage />;
};

export default Page;
