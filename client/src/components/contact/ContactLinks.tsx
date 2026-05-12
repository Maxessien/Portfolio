import { JSX } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactHeader } from "./Contact";

const LinksItem = ({
  href,
  icon,
  title,
  info,
}: {
  title: string;
  icon: JSX.Element;
  info: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-5 p-5 w-full rounded-2xl bg-(--main-primary) border border-(--main-secondary-light) hover:border-(--main-secondary) hover:shadow-lg transition-all duration-300"
    >
      <div className="p-4 rounded-xl bg-(--main-secondary) text-(--text-primary) group-hover:scale-110 group-hover:text-(--text-primary-light) transition-all duration-300">
        <div className="text-3xl">{icon}</div>
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <span className="text-xl font-bold text-(--text-primary) mb-1">{title}</span>
        <span className="text-(--text-secondary) font-medium text-base group-hover:text-(--text-primary-light) transition-colors">{info}</span>
      </div>
    </a>
  );
};

const ContactLinks = () => {
  return (
    <div className="w-full p-6 md:p-10 space-y-6 bg-(--main-primary-light) rounded-3xl border border-(--main-secondary-light) shadow-xl h-full">
      <ContactHeader title="Get In Touch" />
      <div className="flex flex-col gap-5">
        <LinksItem
          href="mailto:essienmax484@gmail.com"
          icon={<MdEmail />}
          info="essienmax484@gmail.com"
          title="Email"
        />
        <LinksItem
          href="tel:+2348114537444"
          icon={<FaPhone />}
          info="+2348114537444"
          title="Phone"
        />
        <LinksItem
          href="https://wa.me/2348114537444"
          icon={<FaWhatsapp />}
          info="+2348114537444"
          title="WhatsApp"
        />
      </div>
    </div>
  );
};

export default ContactLinks;
