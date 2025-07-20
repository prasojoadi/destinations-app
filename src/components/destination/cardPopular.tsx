import * as React from "react";
import { Card } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import type { Destination } from "@/lib/data/data";

type PopularCardProps = Omit<Destination, "onClick"> & {
  onClick?: () => void;
};

export default function PopularCard({
  title,
  imageUrl,
  location,
  onClick,
}: PopularCardProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card
      onClick={onClick}
      className={`p-0 mb-2 md:gap-4 relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all duration-500 ease-out 
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:scale-105 hover:shadow-md`}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 p-1 rounded-full shadow-sm bg-secondary">
        <Bookmark size={16} color="red" />
      </div>

      <div className="absolute bottom-0 left-0 w-full  text-secondary p-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-secondary">{location}</p>
      </div>
    </Card>
  );
}
