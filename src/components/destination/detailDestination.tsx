import { ArrowLeft, Heart, MapPin, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export type Destination = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  rating: number;
  description?: string;
};

interface Props {
  destination: Destination;
}

export default function CardDetail({ destination }: Props) {
  const stars = Math.floor(destination.rating);

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden">
      <div className="relative w-full h-56 sm:h-64">
        <div className="fixed top-4 left-4 z-10">
          <Button
            onClick={() => navigate("/")}
            size="icon"
            className="bg-secondary rounded-full hover:bg-secondary"
          >
            <ArrowLeft size={16} />
          </Button>
        </div>

        <div className="fixed top-4 right-4 z-10">
          <Button
            onClick={() => alert("Disimpan ke favorit!")}
            size="icon"
            className="bg-secondary rounded-full"
          >
            <Heart size={16} color="red" />
          </Button>
        </div>
        <img
          src={destination.image}
          alt={destination.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 space-y-1">
        <div className="">
          <h2 className="text-base font-semibold ">{destination.title}</h2>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {destination.location}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm mb-4">
          <span>{destination.rating}</span>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={` ${
                i < stars ? "fill-destructive text-destructive" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full justify-between bg-gray-100">
            <TabsTrigger value="about" className="flex-1">
              About
            </TabsTrigger>
            <TabsTrigger value="review" className="flex-1">
              Review
            </TabsTrigger>
            <TabsTrigger value="photo" className="flex-1">
              Photo
            </TabsTrigger>
            <TabsTrigger value="video" className="flex-1">
              Video
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="mt-2">
              <h3 className="font-medium text-sm">Description</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-4">
                {destination.description || "Belum ada deskripsi tersedia."}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="review">
            <p className="text-sm text-muted-foreground mt-3">
              Belum ada review.
            </p>
          </TabsContent>
          <TabsContent value="photo">
            <p className="text-sm text-muted-foreground mt-3">
              Belum ada foto tambahan.
            </p>
          </TabsContent>
          <TabsContent value="video">
            <p className="text-sm text-muted-foreground mt-3">
              Belum ada video tersedia.
            </p>
          </TabsContent>
        </Tabs>

        <Button className="w-full bg-primary text-white rounded-full">
          Save a Trip
        </Button>
      </div>
    </div>
  );
}
