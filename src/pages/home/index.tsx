import {
  Home,
  Compass,
  Bookmark,
  TicketPercent,
  Settings,
  Search,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Menu from "@/components/navigation/menu";
import CardRecommendation from "@/components/card/cardRecomendation";
import PopularCard from "@/components/card/cardPopular";
import { destinations } from "@/lib/data/data";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <main className="pb-20">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold">Lest Go !!</h1>
          <h2 className="text-md font-semibold text-secondary-foreground mb-2">
            Enjoy your vacation easily.
          </h2>
          <div className="relative bg-white flex items-center rounded-full col-span-2 border focus-within:ring-1 focus-within:ring-ring pl-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Destinations..."
              className="border-0 focus-visible:ring-0 shadow-none"
            />
          </div>
        </div>
        <div className=" bg-accent py-2 pb-4">
          <h2 className="text-lg font-semibold px-6 mb-2">Recomendation</h2>
          <Carousel
            opts={{ align: "start" }}
            orientation="horizontal"
            className="w-full overflow-x-auto pl-1"
          >
            <CarouselContent className="w-[550px]">
              {destinations.slice(0, 12).map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pt-1 basis-1/2 max-h-[300px]"
                >
                  <CardRecommendation
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    imageUrl={item.image}
                    onClick={() => navigate(`/destination/${item.id}`)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <section className="px-6 py-2">
          <h2 className="text-lg font-semibold pb-2">What's popular</h2>
          <div
            className="sm:grid sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-4"
            style={{
              columnCount: 2,
              columnGap: "0.5rem",
            }}
          >
            {destinations.slice(0, 12).map((item) => (
              <PopularCard
                key={item.id}
                title={item.title}
                location={item.location}
                imageUrl={item.image}
                onClick={() => navigate(`/destination/${item.id}`)}
              />
            ))}
          </div>
        </section>
      </main>

      <Menu
        items={[
          { label: "Home", icon: Home, to: "/" },
          { label: "Bookmark", icon: Bookmark, to: "/bookmark" },
          { label: "Explore", icon: Compass, to: "/explore" },
          { label: "Booking", icon: TicketPercent, to: "/booking" },
          { label: "Setting", icon: Settings, to: "/settings" },
        ]}
      />
    </>
  );
}

export default HomePage;
