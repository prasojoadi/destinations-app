import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "../ui/button";
import type { Destination } from "@/lib/data/data";


export default function CardRecommendation ({
  imageUrl,
  location,
  title,
  rating,
}: Destination) {
   const onClick = () => {};

  return (
    <Card
      onClick={onClick} 
      className="gap-4 py-0 min-w-[150px] rounded-xl border bg-transparent shadow-none border-none"
    >
      <CardHeader
        className="h-36 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CardAction>
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full text-destructive relative top-2 -right-4"
          >
            <Heart />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-0">
        <h1 className="text-base font-bold">{title}</h1>

        <div className="grid grid-cols-12 items-center ">
          <MapPin size={16} />
          <span className="col-span-5 font-stretch-50%" >{location}</span>
        </div>

        <div className="grid grid-cols-12 items-center">
          <Star size={16} className="" />
          <span className="col-span-5 font-stretch-50%">{rating}</span>
        </div>
      </CardContent>
    </Card>
  );
};
