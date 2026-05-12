"use client";

import ContactLinks from "./ContactLinks";
import SendMessageSection from "./SendMessageSection";

export const ContactHeader = ({ title }: { title: string }) => {
  return (
    <h3 className="w-full text-2xl md:text-3xl font-bold text-(--text-primary) mb-6 border-b border-(--main-secondary-light) pb-3">
      {title}
    </h3>
  );
};

const Contact = () => {
  return (
    <section className="py-20 md:py-32 mx-auto px-4 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-(--text-primary) tracking-tight">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-(--text-secondary-light) max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div className="h-1 w-24 bg-(--main-secondary-light) mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          <ContactLinks />
          <SendMessageSection />
        </div>
      </div>
    </section>
  );
};

export default Contact;
