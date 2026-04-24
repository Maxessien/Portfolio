import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LogoTitleCombo } from "./AppHeader";

const AppFooter = () => {
  return (
    <footer className="w-screen flex flex-col sm:flex-row gap-3 px-2 sm:px-4 md:px-5 lg:px-7 py-3 justify-between items-start">
      <div>
        <LogoTitleCombo />
        <div className="flex text-4xl mt-3 font-semibold gap-2 items-center justify-start">
          <a target="_blank" href="https://github.com/Maxessien">
            <FaGithub />
          </a>
          <a target="_blank" href="https://wa.me/2348114537444">
            <FaWhatsapp />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/max-essien-83324227a">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-left my-2">Quick Links</h3>
        <nav className="flex w-full justify-start flex-col gap-3 font-medium text-lg items-start">
          <Link className="hover:text-(--text-primary-light)" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-(--text-primary-light)"
            href={"/projects"}
          >
            Projects
          </Link>
          <Link className="hover:text-(--text-primary-light)" href={"/contact"}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;
