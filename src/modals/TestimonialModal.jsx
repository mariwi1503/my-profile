import React, { useEffect } from "react";

function TestimonialModal({ item, onClose, isOpen }) {
  const [isVisible, setIsVisible] = React.useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderReviewText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // return <strong key={index}>{part.slice(2, -2)}</strong>;
        return <span key={index} className="text-orange font-extrabold">{part.slice(2, -2)}</span>
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-primary bg-black bg-opacity-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className={`relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-lg max-w-md mx-auto p-8 z-10 transform transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75"
        }`}
      >
        {/* Close button in the top right corner */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-semibold focus:outline-none"
        >
          ✕
        </button>

        {/* Header: Name */}
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          {item.name}
        </h2>

        {/* Quote style for the review */}
        <p className="mt-4 text-center relative text-lg text-white leading-relaxed">
          <span className="text-5xl font-bold text-white opacity-50 absolute -left-4 -top-2">
            “
          </span>
          {renderReviewText(item.review)}
          <span className="text-5xl font-bold text-white opacity-50 absolute -right-4 -bottom-2">
            ”
          </span>
        </p>
      </div>
    </div>
  );
}

export default TestimonialModal;
