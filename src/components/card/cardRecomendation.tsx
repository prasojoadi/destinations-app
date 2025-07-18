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
  className?: string;
};

const CardRecommendation: React.FC<CardRecommendationProps> = ({
  title,
  rating,
  location,
  imageUrl,
  onClick,
}) => {

  return (
    <Card
      onClick={onClick}
      className="p-0 gap-0 ml-4 min-w-[150px] rounded-xl border "
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
        <h1 className="text-base font-semibold">{title}</h1>

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
 