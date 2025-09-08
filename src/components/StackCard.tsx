import React from "react";

interface StackCardProps {
  image: string;
}

function StackCard({ image }: StackCardProps) {
  return (
    <div className="w-[100px] h-[100px] md:w-28 md:h-28 bg-secondary p-7 rounded-lg">
      <img src={image} alt="Image" />
    </div>
  );
}

export default StackCard;
