import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <section className="h-14 w-full bg-orange mt-10 font-bold text-primary pb-[48px] md:pb-0">
      <div className="flex justify-between px-5 h-full items-center text-md">
        <h4>Muhammad Ary Widodo, 2024.</h4>
        <div className="flex gap-3 justify-end">
          <a
            href="https://www.instagram.com/ary_code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 active:scale-95"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://wa.me/6285338714313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 active:scale-95"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ary-687552209/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 active:scale-95"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
