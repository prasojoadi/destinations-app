import * as React from "react";
import { Card } from "@/components/ui/card";
import { MapPinned, Star } from "lucide-react";

type CardRecommendationProps = {
  title: string;
  location: string;
  rating: number;
  description?: string;
  imageUrl: string;
  onClick?: () => void;
};

const CardRecommendation: React.FC<CardRecommendationProps> = ({
  title,
  rating,
  location,
  imageUrl,
  onClick,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card
      onClick={onClick}
      className={`p-2 max-w-sm border rounded-xl transform transition-all duration-500 ease-out
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:scale-105 hover:shadow-md`}
    >
      <div className="grid grid-cols-2 gap-4  justify-between">
        <img
          src={imageUrl}
          className=" grid max-w-[18rem] w-full rounded-lg "
        />

        <div>
          <div className="flex space-x-2 items-center">
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} />
            <Star size={18} className="text-yellow-500"  />
            <span className="text-yellow-500 font-semibold">{rating}</span>
          </div>
          <h1 className="text-md font-semibold ">{title}</h1>
          <div className="flex space-x-2 items-center">
            <MapPinned size={18} className="text-primary" />
            <p className="text-sm ">{location}</p>
          </div>
        </div>
      </div>
      
    </Card>
  );
};

export default CardRecommendation;
