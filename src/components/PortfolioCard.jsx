function PortfolioCard({ name, imagePath, onClick }) {
  return (
    <div
      className="w-full md:w-[350px] lg:w-[30%] bg-secondary p-4 rounded-lg hover:scale-105 active:scale-95 hover:cursor-pointer"
      onClick={onClick} // klik card akan membuka modal
    >
      <img src={imagePath} alt={name} />
      <h4 className="text-center text-primary text-lg font-bold">{name}</h4>
    </div>
  );
}

export default PortfolioCard;
