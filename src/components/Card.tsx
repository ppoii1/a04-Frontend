import React from "react";

type CardProps = {
  venueName: string;
  imgSrc: string;
};

const Card: React.FC<CardProps> = ({ venueName, imgSrc }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
      <img
        src={imgSrc}
        alt={venueName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{venueName}</h3>
        <p className="text-gray-600">Discover the perfect location for your event.</p>
      </div>
    </div>
  );
};

export default Card;
