// import { Globe, Database, Server, FileText } from "lucide-react";
import VideoStory from "../VideoStory";

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

        <div className="flex flex-col mx-auto md:flex-row items-center">
          <div className="px-5 w-full md:w-2/3">
            <h3 className="text-3xl sm:text-4xl font-medium">Summary</h3>
            <div className="h-1 w-28 bg-orange rounded-lg"></div>

            {/* for mobile phone */}
            <p className="text-justify text-base sm:text-lg block md:hidden">
              I was raised in a family of farmers and my first job was working
              on the farm. However, I later pursued other occupations such as
              driving and working as a motorcycle taxi driver. It wasn&apos;t until I
              discovered my passion for programming that I decided to pursue it
              as a career.
              <br />
              <br />I am a passionate and results-driven Backend Developer with a solid foundation in Node.js, specializing in Express.js and NestJS. In addition to backend expertise, I also possess strong Frontend development skills using HTML, CSS, JavaScript, React, and Next.js, allowing me to contribute across the full stack 
              when needed. 
              <br />
              Beyond technical proficiency, I have proven experience in leading and managing teams, coordinating development processes, and driving collaboration to achieve project goals. With a combination of technical mastery and leadership ability, I strive to deliver efficient, scalable, and impactful solutions that bring real value to every project I work on.
            </p>

            {/* for bigger display */}
            <br />
            <p className="text-justify text-base sm:text-lg hidden md:block">
              I was raised in a family of farmers and my first job was working
              on the farm. However, I later pursued other occupations such as
              driving and working as a motorcycle taxi driver. It wasn&apos;t until I
              discovered my passion for programming that I decided to pursue it
              as a career.
              <br />
              <br />I am a passionate and results-driven Backend Developer with a solid foundation in Node.js, specializing in Express.js and NestJS. In addition to backend expertise, I also possess strong Frontend development skills using HTML, CSS, JavaScript, React, and Next.js, allowing me to contribute across the full stack 
              when needed. 
              <br />
              Beyond technical proficiency, I have proven experience in leading and managing teams, coordinating development processes, and driving collaboration to achieve project goals. With a combination of technical mastery and leadership ability, I strive to deliver efficient, scalable, and impactful solutions that bring real value to every project I work on.
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
      </div>
    </section>
  );
}
