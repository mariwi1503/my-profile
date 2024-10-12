function StackCard({ image }) {
  return (
    <div className="w-[95px] h-[95px] md:w-28 md:h-28 bg-secondary p-7 rounded-lg">
      <img src={image} alt="Image" />
    </div>
  );
}

export default StackCard;
