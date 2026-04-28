import { JSX } from "react";
import { ContactHeader } from "./Contact";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

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
    <div className="w-full px-3 py-2 rounded-md hover:border-2 hover:border-(--main-secondary) flex justify-start items-center gap-2">
      <div className="p-3 rounded-md border-(--main-secondary) border-2 text-2xl font-medium">{icon}</div>
      <a
        className="flex-1 flex flex-col justify-center items-start text-xl font-medium"
        href={href}
	target="_blank"
      >
        <span>{title}</span>
        <span className="text-lg">{info}</span>
      </a>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <section className="w-full px-3 py-5 space-y-3 rounded-md shadow-[0px_0px_10px_-7px_var(--text-primary)] lg:px-5">
      <ContactHeader title="Get In Touch" />
      <div className="space-y-3">
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
    </section>
  );
};

export default ContactLinks;
