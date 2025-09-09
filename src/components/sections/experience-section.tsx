"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { experienceList } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IExperience } from "@/types/experience";

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<IExperience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (experience: IExperience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedExperience(null);
  // };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-balance">
            Professional Experience
          </h2>
          {/* Divider */}
          <div className="w-1/3 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-pretty">
            My journey in backend development, working with innovative companies
            and building solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experienceList.map((exp, index) => (
            // <Card
            //   key={index}
            //   className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            //   onClick={() => openModal(exp)}
            // >
            //   <CardHeader>
            //     <div className="flex gap-4 items-center">
            //       <div className="flex-shrink-0">
            //         <Image
            //           src={exp.logo || "/placeholder.svg?height=50&width=50&query=company logo"}
            //           alt={`${exp.company} logo`}
            //           width={50}
            //           height={50}
            //           className="w-12 h-12 rounded-lg object-cover"
            //         />
            //       </div>
            //       <div className="flex-grow">
            //         <CardTitle className="text-lg flex items-center gap-2">
            //           {exp.company}
            //           {exp.isActive && (
            //             <Badge variant="secondary" className="text-xs">
            //               Current
            //             </Badge>
            //           )}
            //         </CardTitle>
            //         <p className="text-base font-semibold text-primary">{exp.role}</p>
            //         <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
            //           <div className="flex items-center gap-1">
            //             <Calendar className="h-3 w-3" />
            //             <span>
            //               {exp.start} - {exp.end}
            //             </span>
            //           </div>
            //           <div className="flex items-center gap-1">
            //             <MapPin className="h-3 w-3" />
            //             <span>
            //               {exp.city}, {exp.country}
            //             </span>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </CardHeader>
            // </Card>

            <div
              className="relative flex p-2 bg-gray-200 rounded-lg w-full h-50 hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
              onClick={() => openModal(exp)}
              key={index + 1}
            >
              {/* Icon centang di pojok kanan atas jika aktif */}
              {/* {isActive && (
                <div className="absolute top-2 right-3 p-1">
                  <FaCheckCircle className="text-primary w-6 h-6" />
                </div>
              )} */}

              <div className="w-1/6">
                <img src={exp.logo} alt="Company logo" className="rounded-lg" />
              </div>
              <div className="w-5/6 bg-read-200 pl-2 text-slate-800">
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p>{`${exp.company} - ${exp.job}`}</p>
                <p>{`${exp.start} - ${exp.end}`}</p>
                <p>{`${exp.city}, ${exp.country} - ${exp.location}`}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto text-slate-800">
            {selectedExperience && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Experience Overview
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={
                        selectedExperience.logo ||
                        "/placeholder.svg?height=60&width=60&query=company logo"
                      }
                      alt={`${selectedExperience.company}`}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">
                        {selectedExperience.company}
                      </h3>
                      <p className="text-lg font-semibold">
                        {selectedExperience.role}
                      </p>
                      <p className="text-slate-800">
                        {selectedExperience.start} - {selectedExperience.end}
                      </p>
                      <p>
                        {selectedExperience.city}, {selectedExperience.country}
                      </p>
                    </div>
                  </div>

                  {selectedExperience.projectImage && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Project Preview
                      </h4>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={
                            selectedExperience.projectImage ||
                            "/placeholder.svg"
                          }
                          alt={`${selectedExperience.company} project`}
                          width={600}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedExperience.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {selectedExperience.responsibilities.map(
                        (responsibility, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {selectedExperience.website && (
                    <div className="flex justify-center">
                      <Button asChild>
                        <a
                          href={selectedExperience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-slate-700 hover:text-slate-600"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit Company Website
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
