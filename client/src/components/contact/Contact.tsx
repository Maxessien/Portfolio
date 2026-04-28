"use client";

import ContactLinks from "./ContactLinks";
import SendMessageSection from "./SendMessageSection";

export const ContactHeader = ({ title }: { title: string }) => {
  return (
    <h2 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-medium">
      {title}
    </h2>
  );
};

const Contact = () => {
  return (
<>
    <h2 className="w-full mb-4 text-center text-2xl md:text-4xl lg:text-5xl font-medium">
      Contact Me
    </h2>
    <section className="grid grid-cols-1 mx-auto md:grid-cols-2 px-3 w-full gap-2 max-w-7xl">
      <ContactLinks />
      <SendMessageSection />
    </section>
</>
  );
};

export default Contact;
