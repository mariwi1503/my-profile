import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <section className="w-full bg-slate-900 mt-10 text-secondary py-4 font-sans">
      <div className="flex flex-col justify-between px-5 h-full items-center text-md gap-2">
        <div className="flex gap-4 justify-start text-xl">
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
        <p className="text-center text-[12px]">
          &copy; Copyright 2024, All Right Reserved by Ary.
        </p>
      </div>
    </section>
  );
}

export default Footer;
