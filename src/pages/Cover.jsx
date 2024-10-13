import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

function Cover({ setCover }) {
  return (
    <div className="h-screen flex flex-col items-center text-gray-200">
      <img
        src="images/cover.png"
        alt="Banner image"
        className="h-40 rounded-full mt-24 mb-5 sm:h-52 lg:h-64"
      />
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-shadow-md">
        - MUHAMMAD ARY -
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light mt-4">
        Backend Developer
      </p>
      <p className="text-center text-base sm:text-lg md:text-lg font-normal max-w-4xl mt-5 mb-8 px-4">
        I build secure, scalable, and efficient systems that drive your digital
        products to success. Let’s turn your complex challenges into seamless
        solutions with robust architecture and powerful integrations.
      </p>
      <button
        onClick={() => setCover(false)}
        className="bg-white text-primary font-bold py-3 px-6 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        Find more
      </button>
      <div className="h-1 w-1/2 bg-orange rounded-lg mt-10"></div>
      <div className="flex space-x-12 text-4xl sm:text-5xl mt-8 ">
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

        {/* <a
          href="https://github.com/mariwi1503"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImGithub />
        </a> */}
      </div>
    </div>
  );
}

export default Cover;
