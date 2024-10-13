import { portfolioList } from "../constant";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="px-5">
        <h3 className="text-3xl sm:text-4xl font-medium">Portfolio</h3>
        <div className="h-1 w-32 bg-orange rounded-lg mt-2"></div>
      </div>
      {/* portfolio container */}
      <div className="px-5 mt-7 flex flex-col gap-3 md:gap-5 w-full md:flex-row md:flex-wrap md:justify-between lg:justify-start lg:gap-6">
        {portfolioList.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
