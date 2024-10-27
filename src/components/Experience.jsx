import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../constant";
import ExperienceModal from "../modals/ExperienceModal";

function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null); // Menyimpan data card yang diklik

  function openModal(experience) {
    setSelectedExperience(experience); // Set data yang dipilih
    setIsModalOpen(true); // Tampilkan modal
  }

  const closeModal = () => setIsModalOpen(false); // Menutup modal

  return (
    <section id="experience" className="mb-10">
      <div className="px-5">
        <h3 className="text-3xl sm:text-4xl font-medium">Experience</h3>
        <div className="h-1 w-32 bg-orange rounded-lg mt-2"></div>
      </div>
      {/* experience container */}
      {/* <div className="flex mt-5 px-5 flex-wrap justify-center md:gap-2 lg:justify-between"> */}
      <div className="mt-5 px-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {experienceList.map((item, index) => (
          <ExperienceCard
            {...item}
            key={index}
            onClick={() =>
              openModal({
                description: item.description,
                responsibilities: item.responsibilities,
                website: item.website,
              })
            } // Kirim data saat card diklik
          />
        ))}
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          data={selectedExperience} // Kirim data ke modal
        />
      )}
    </section>
  );
}

export default Experience;
