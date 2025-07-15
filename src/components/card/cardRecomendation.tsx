import * as React from "react";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, Star } from "lucide-react";

type CardRecommendationProps = {
  title: string;
  location: string;
  rating: number;
  category?: string;
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
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card
      onClick={onClick}
      className={`p-0 gap-0 ml-4 min-w-[150px] rounded-xl border transition-all duration-500 ease-out
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:scale-105 hover:shadow-md`}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[100px] object-cover rounded-t-xl"
        />
        <div className="absolute top-2 right-2  p-1 rounded-full shadow-sm bg-secondary">
          <Heart className="w-4 h-4 text-destructive" />
        </div>
      </div>

      <div className="grid gap-1 p-3">
        <h1 className="text-md font-semibold">{title}</h1>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin size={12} className="text-primary" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star size={12} className="text-primary" />
          <span>{rating}</span>
        </div>
      </div>
    </Card>
  );
};

export default CardRecommendation;
 