function PortfolioModal({ portfolio, onClose }) {
  const { description, techStack, role, ownership, contribution } = portfolio;

  return (
    <div className="fixed inset-0 bg-secondary md:bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-0 relative p-6 md:p-10 text-gray-800 dark:text-gray-200 overflow-y-auto max-h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
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

        {/* Description Section */}
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Project Overview
        </h2>
        <p className="text-justify leading-relaxed text-lg">{description}</p>

        {/* Ownership Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Ownership
        </h2>
        <p className="text-justify leading-relaxed text-lg">{ownership}</p>

        {/* Role and Contribution Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Role & Contribution
        </h2>
        <p className="text-justify leading-relaxed text-lg">
          My role is <span className="font-bold">{role}</span>, and my
          contribution includes {contribution}.
        </p>

        {/* Technologies Section */}
        <h3 className="text-xl font-semibold mt-6 mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
