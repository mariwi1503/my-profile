import { Globe, Database, Server, FileText } from "lucide-react";
import VideoStory from "../VideoStory";
import { Card, CardContent } from "../ui/card";

const highlights = [
  {
    icon: <Server className="h-8 w-8" />,
    title: "API Development",
    description: "Building robust RESTful APIs and integrating backend services efficiently",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Design",
    description:
      "Skilled in SQL and NoSQL database architecture and optimization",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website",
    description:
      "Building modern, responsive websites with cutting-edge technologies",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Landing Page",
    description:
      "Creating high-converting landing pages that drive business results",
  },
];

export function SummarySection() {
  return (
    <section id="summary" className="py-20 px-4 bg-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-balance">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col mx-auto md:flex-row items-center mb-10">
          <div className="pr-5 w-full md:w-2/3">
            <h3 className="text-3xl sm:text-4xl font-medium">Summary</h3>
            <div className="h-1 w-28 bg-orange rounded-lg"></div>

            {/* for mobile phone */}
            <p className="text-justify text-base sm:text-lg block md:hidden">
              I was raised in a family of farmers and my first job was working
              on the farm. However, I later pursued other occupations such as
              driving and working as a motorcycle taxi driver. It wasn&apos;t
              until I discovered my passion for programming that I decided to
              pursue it as a career.
              <br />
              <br />I am a passionate and results-driven Backend Developer with
              a solid foundation in Node.js, specializing in Express.js and
              NestJS. In addition to backend expertise, I also possess Frontend
              development skills using HTML, CSS, JavaScript, React, and
              Next.js, allowing me to contribute across the full stack when
              needed.
              <br />
              Beyond technical proficiency, I have proven experience in leading
              and managing teams, coordinating development processes, and
              driving collaboration to achieve project goals. With a combination
              of technical mastery and leadership ability, I strive to deliver
              efficient, scalable, and impactful solutions that bring real value
              to every project I work on.
            </p>

            {/* for bigger display */}
            <br />
            <p className="text-justify text-base sm:text-lg hidden md:block">
              I was raised in a family of farmers and my first job was working
              on the farm. However, I later pursued other occupations such as
              driving and working as a motorcycle taxi driver. It wasn&apos;t
              until I discovered my passion for programming that I decided to
              pursue it as a career.
              <br />
              <br />I am a passionate and results-driven Backend Developer with
              a solid foundation in Node.js, specializing in Express.js and
              NestJS. In addition to backend expertise, I also possess Frontend
              development skills using HTML, CSS, JavaScript, React, and
              Next.js, allowing me to contribute across the full stack when
              needed.
              <br />
              Beyond technical proficiency, I have proven experience in leading
              and managing teams, coordinating development processes, and
              driving collaboration to achieve project goals. With a combination
              of technical mastery and leadership ability, I strive to deliver
              efficient, scalable, and impactful solutions that bring real value
              to every project I work on.
              <br />
              <br />I possess a strong work ethic and am always eager to learn
              new things. Furthermore, I am skilled in time management, possess
              excellent communication skills, and am a logical thinker. I hold a
              great deal of respect for others and am always willing to lend a
              helping hand whenever necessary.
            </p>
          </div>

          <div className="pl-5 pr-5 md:pr-0 w-full md:w-1/3">
            <VideoStory />
          </div>
        </div>

        <div className="">
          <h3 className="text-3xl sm:text-4xl font-medium mb-6">
            Specialization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
