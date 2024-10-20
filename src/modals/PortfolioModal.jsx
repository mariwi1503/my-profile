function PortfolioModal({ portfolio, onClose }) {
  const { description, techStack, role, ownership, contribution } = portfolio;

  return (
    <div
      // onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    >
      <div className="bg-secondary rounded-lg shadow-lg max-w-xl w-5/6 relative text-black p-3 md:p-7 text-[14px] md:text-[16px] max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-red-600 text-white hover:bg-red-500 px-3 py-1 rounded-md"
        >
          Close
        </button>
        <h2 className="text-xl font-bold border-b-2 border-orange inline-block mb-2">
          Description
        </h2>
        {/* <div className="h-1 w-20 bg-orange rounded-lg"></div> */}
        <p className="text-justify">{description}</p>
        <h2 className="text-xl font-bold mt-4 border-b-2 border-orange inline-block mb-2">
          Ownership
        </h2>
        {/* <div className="h-1 w-20 bg-orange rounded-lg"></div> */}
        <p className="text-justify">{ownership}</p>
        <h2 className="text-xl font-bold mt-4 border-b-2 border-orange inline-block mb-2">
          Role and contribution
        </h2>
        {/* <div className="h-1 w-44 bg-orange rounded-lg"></div> */}
        <p className="text-justify">
          My Role is <span className="font-bold">{role}</span>, {contribution}
        </p>
        <h3 className="text-lg font-bold mt-4 border-b-2 border-orange inline-block mb-2">
          Technologies:
        </h3>
        {/* <div className="h-1 w-28 bg-orange rounded-lg"></div> */}
        <div className="flex gap-2 mt-4 text-white flex-wrap">
          {techStack.map((item, index) => (
            <p
              key={index}
              className="py-1 px-2 bg-primary rounded-sm md:rounded-md"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
