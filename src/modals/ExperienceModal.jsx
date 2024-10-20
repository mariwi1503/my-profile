import { useEffect } from "react";

function ExperienceModal({ isOpen, closeModal, data }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Mencegah scroll saat modal terbuka
    } else {
      document.body.classList.remove("overflow-hidden"); // Mengizinkan scroll lagi
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null; // Tidak menampilkan modal jika isOpen false

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-secondary md:bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-0 relative p-6 md:p-10 text-gray-800 dark:text-gray-200 overflow-y-auto max-h-[85vh]">
        {/* Tombol Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Deskripsi */}
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Experience Overview
        </h2>
        <p className="text-justify leading-relaxed text-lg">
          {data.description}
        </p>

        {/* Tanggung Jawab */}
        <h3 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Responsibilities
        </h3>
        <ul className="list-disc list-inside text-lg">
          {data.responsibilities.map((item, index) => (
            <li key={index} className="text-justify leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        {/* Website Link */}
        <div className="flex justify-center mt-6">
          <a
            className="text-white hover:opacity-80 py-2 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Company Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;
