function StackCard({ image }) {
  return (
    <div className="w-[95px] h-[95px] md:w-32 md:h-32 bg-secondary p-4 rounded-lg">
      <img src={image} alt="Image" />
    </div>
  );
}

export default StackCard;
