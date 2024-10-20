import { useEffect } from "react";

function ExperienceModal({ isOpen, closeModal, data }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Mencegah scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Mengizinkan scroll lagi
    }

    // Cleanup effect untuk menghapus kelas saat komponen dibongkar
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null; // Tidak menampilkan modal jika `isOpen` false

  const handleOutsideClick = (e) => {
    // Mengecek apakah klik terjadi di luar modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    >
      <div className="bg-secondary rounded-lg shadow-lg max-w-xl w-5/6 relative text-black p-5 md:p-10 text-[14px] md:text-[16px] max-h-[85vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 bg-red-600 text-white hover:bg-red-500 px-3 py-1 rounded-md"
        >
          Close
        </button>
        <h2 className="text-xl font-bold">Description</h2>
        <div className="h-1 w-20 bg-orange rounded-lg"></div>
        <p className="my-4 text-justify">{data.description}</p>
        <h3 className="text-lg font-bold">Responsibilities:</h3>
        <div className="h-1 w-28 bg-orange rounded-lg"></div>
        <ul className="list-disc list-inside mt-4 mb-8">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a
          className="text-slate-900 rounded-lg mx-auto bg-orange hover:opacity-80 py-2 px-4"
          href={data.website}
          target="_blank"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default ExperienceModal;
