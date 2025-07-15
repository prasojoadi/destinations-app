import * as React from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PopularCardProps {
  title: string;
  imageUrl: string;
  location: string;
}

const PopularCard: React.FC<PopularCardProps> = ({
  title,
  imageUrl,
  location,
}) => {
  return (
    <Card className="p-0 relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2  p-1 rounded-full shadow-sm bg-secondary">
        <Heart className="w-4 h-4 text-destructive" />
      </div>

      <div className="absolute bottom-0 left-0 w-full  text-white p-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-secondary">{location}</p>
      </div>
    </Card>
  );
};

export default PopularCard;
