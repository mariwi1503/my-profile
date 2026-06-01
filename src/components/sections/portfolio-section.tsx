"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { portfolioList } from "@/common/constants";
import { ExternalLink, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IProject } from "@/types";

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= portfolioList.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? portfolioList.length - 1 : prev - 1
    );
  };

  const openModal = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedProject(null);
  // };

  const handleVisitClick = (project: IProject) => {
    if (project.status === "private") {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else if (project.website) {
      window.open(project.website, "_blank");
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured Projects
          </h2>
          {/* Divider */}
          <div className="w-1/4 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            A showcase of backend systems and applications I&apos;ve built,
            demonstrating my expertise in scalable architecture and modern
            technologies.
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={prevSlide}
                className="w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                >
                {portfolioList.map((project, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-4">
                    {/* <Card
                      className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer w-full"
                      onClick={() => openModal(project)}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.imagePath || "/placeholder.svg"}
                          alt={`${project.name} project screenshot`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant={
                              project.status === "live"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {project.status === "live"
                              ? "Live"
                              : project.status === "beta"
                              ? "Beta"
                              : "Private"}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {project.name}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium">
                          {project.role}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card> */}
                    <div
                      className="w-full bg-secondary p-4 rounded-lg hover:scale-105 active:scale-95 hover:cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <img src={project.imagePath} alt={project.name} />
                      <h4 className="text-center text-slate-800 text-lg font-bold">
                        {project.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {portfolioList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioList.map((project, index) => (
              // <Card
              //   key={index}
              //   className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              //   onClick={() => openModal(project)}
              // >
              //   <div className="aspect-video relative overflow-hidden">
              //     <Image
              //       src={project.imagePath || "/placeholder.svg"}
              //       alt={`${project.name} project screenshot`}
              //       fill
              //       className="object-cover group-hover:scale-105 transition-transform duration-300"
              //     />
              //     <div className="absolute top-2 right-2">
              //       <Badge
              //         variant={
              //           project.status === "live" ? "default" : "secondary"
              //         }
              //         className="text-xs"
              //       >
              //         {project.status === "live"
              //           ? "Live"
              //           : project.status === "beta"
              //           ? "Beta"
              //           : "Private"}
              //       </Badge>
              //     </div>
              //   </div>

              //   <CardHeader className="pb-2">
              //     <CardTitle className="text-lg">{project.name}</CardTitle>
              //     <p className="text-sm text-primary font-medium">
              //       {project.role}
              //     </p>
              //   </CardHeader>

              //   <CardContent className="pt-0">
              //     <p className="text-muted-foreground text-sm line-clamp-2">
              //       {project.description}
              //     </p>
              //   </CardContent>
              // </Card>
              <div
                key={index + 1}
                className="w-full bg-secondary p-4 rounded-lg hover:scale-105 active:scale-95 hover:cursor-pointer"
                onClick={() => openModal(project)} // klik card akan membuka modal
              >
                <img src={project.imagePath} alt={project.name} />
                <h4 className="text-center text-slate-800 text-lg font-bold">
                  {project.name}
                </h4>
              </div>
            ))}
          </div>
        )}

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto text-slate-800 bg-gray-200">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedProject.name}
                  </DialogTitle>
                  <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto"></div>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={selectedProject.imagePath || "/placeholder.svg"}
                      alt={`${selectedProject.name} project screenshot`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Role: {selectedProject.role}
                    </h3>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mb-2"></div>
                    {/* <p className="font-semibold mb-4">
                      {selectedProject.role}
                    </p> */}
                    <p className="leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">Ownership</h4>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mb-2"></div>
                    <p className="leading-relaxed">
                      {selectedProject.ownership}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      My Contribution
                    </h4>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mb-2"></div>
                    <p className="leading-relaxed">
                      {selectedProject.contribution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      Technologies Used
                    </h4>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mb-2"></div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm bg-gradient-to-r from-orange-500 to-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleVisitClick(selectedProject)}
                      disabled={
                        selectedProject.status === "private" &&
                        !selectedProject.website
                      }
                      className="flex items-center gap-2 bg-slate-700 hover:text-slate-700"
                    >
                      {selectedProject.status === "private" ? (
                        <>
                          <Lock className="h-4 w-4" />
                          Private Project
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          Visit Website
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-md z-50">
            This website is private or still pending deployment.
          </div>
        )}
      </div>
    </section>
  );
}
