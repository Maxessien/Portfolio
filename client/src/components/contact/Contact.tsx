import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-(--main-primary) flex flex-col items-center">
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-(--text-primary)">Contact Me</h2>
            <ul className="w-full rounded-md flex flex-col bg-(--main-primary-light) items-start gap-3 px-5 py-4">
                <li><a className="text-2xl font-medium hover:text-(--text-secondary-light) flex gap-2 items-center" href="mailto:essienmax484@gmail.com"><MdEmail />{" "}Email Me</a></li>
                <li><a className="text-2xl font-medium hover:text-(--text-secondary-light) flex gap-2 items-center" href="tel:+2348114537444"><FaPhone />{" "}Call Me</a></li>
                <li><a target="_blank" className="text-2xl font-medium hover:text-(--text-secondary-light) flex gap-2 items-center" href="https://wa.me/2348114537444"><FaWhatsapp />{" "}Message me on Whatsapp</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Contact