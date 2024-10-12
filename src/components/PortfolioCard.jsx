function PortfolioCard({ name, imagePath }) {
  return (
    <div>
      <div className="w-full h-52 md:h-64 md:w-[360px] mb-1 lg:w-[470px] rounded-lg bg-secondary overflow-hidden hover:scale-105 active:scale-95 hover:cursor-pointer">
        <img
          src={imagePath}
          alt="Image"
          className="w-auto mx-auto h-full object-cover px-10"
        />
      </div>
      <p className="text-center text-lg font-bold">{name}</p>
    </div>
  );
}

export default PortfolioCard;
