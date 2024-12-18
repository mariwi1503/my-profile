import { useEffect, useState } from "react";

function PortfolioModal({ portfolio, onClose, isOpen }) {
  const {
    description,
    techStack,
    role,
    ownership,
    contribution,
    website,
    status,
  } = portfolio;

  const [showToast, setShowToast] = useState(false);

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
      onClose();
    }
  };

  const handleVisitClick = () => {
    if (status === "private") {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Toast akan hilang otomatis setelah 3 detik
    } else {
      window.open(website, "_blank");
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-0 relative p-6 md:p-10 text-gray-200 overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-all duration-300"
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

        {/* Description Section */}
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">
          Project Overview
        </h2>
        <p className="text-justify leading-relaxed text-lg">{description}</p>

        {/* Ownership Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-gray-700 pb-2">
          Ownership
        </h2>
        <p className="text-justify leading-relaxed text-lg">{ownership}</p>

        {/* Role and Contribution Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-gray-700 pb-2">
          Role & Contribution
        </h2>
        <p className="text-justify leading-relaxed text-lg">
          My role is <span className="font-bold">{role}</span>, and my
          contribution includes {contribution}.
        </p>

        {/* Technologies Section */}
        <h3 className="text-xl font-semibold mt-6 mb-4 border-b-2 border-gray-700 pb-2">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 bg-secondary text-slate-900 rounded-full shadow-md text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Visit Website Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleVisitClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          >
            Visit website
          </button>
        </div>

        {/* Toast for Private Website */}
        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">
            This website is private or still pending deployment.
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioModal;
