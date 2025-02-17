import VideoStory from "./VideoStory";

function Summary() {
  return (
    <section
      id="summary"
      className="flex flex-col mx-auto pb-10 md:flex-row items-center"
    >
      {/* summary container */}
      <div className="mt-3 md:mt-24 px-5 w-full md:w-2/3">
        <h3 className="text-3xl sm:text-4xl font-medium">Summary</h3>
        <div className="h-1 w-28 bg-orange rounded-lg mt-2"></div>
        {/* <br /> */}
        {/* for mobile phone */}
        <p className="text-justify text-base sm:text-lg block md:hidden">
          I was raised in a family of farmers and my first job was working on
          the farm. However, I later pursued other occupations such as driving
          and working as a motorcycle taxi driver. It wasn't until I discovered
          my passion for programming that I decided to pursue it as a career.
          <br />
          <br />I am a dedicated and experienced Backend Developer with a strong foundation in Node.js, particularly with Express.js and NestJS. I also bring a diverse set of supporting skills, including basic Frontend development using HTML, CSS, and React. Beyond technical expertise, I have the ability to lead and manage a team effectively, oversee the development process, and provide valuable suggestions to ensure the successful completion of projects.
        </p>
        {/* for bigger display */}
        <br />
        <p className="text-justify text-base sm:text-lg hidden md:block">
          I was raised in a family of farmers and my first job was working on
          the farm. However, I later pursued other occupations such as driving
          and working as a motorcycle taxi driver. It wasn't until I discovered
          my passion for programming that I decided to pursue it as a career.
          <br />
          <br />
          I am a dedicated and experienced Backend Developer with a strong foundation in Node.js, particularly with Express.js and NestJS. I also bring a diverse set of supporting skills, including basic Frontend development using HTML, CSS, and React. Beyond technical expertise, I have the ability to lead and manage a team effectively, oversee the development process, and provide valuable suggestions to ensure the successful completion of projects.
          <br />
          <br />I possess a strong work ethic and am always eager to learn new
          things. Furthermore, I am skilled in time management, possess
          excellent communication skills, and am a logical thinker. I hold a
          great deal of respect for others and am always willing to lend a
          helping hand whenever necessary.
        </p>
      </div>
      {/* video container */}
      <div className="md:mt-24 pl-5 pr-5 md:pr-0 w-full md:w-1/3">
        <VideoStory />
      </div>
    </section>
  );
}

export default Summary;
