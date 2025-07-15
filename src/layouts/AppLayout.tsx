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

import ijenImage from "@/assets/img/ijen.jpg";
import jatimpark from "@/assets/img/jatimpark.jpg";
import karimun from "@/assets/img/karimun.jpeg";
import bromo from "@/assets/img/bromo.jpeg";
import cikaso from "@/assets/img/cikaso.jpg";
import madakaripura from "@/assets/img/madakaripura.jpg";
import pandawa from "@/assets/img/pandawa.jpg";
import rajaampat from "@/assets/img/rajaampat.jpg";
import rinjani from "@/assets/img/rinjani.jpeg";
import saloka from "@/assets/img/saloka.jpeg";
import tmii from "@/assets/img/tmii.jpg";
import tumpaksewu from "@/assets/img/tumpaksewu.jpg";

const destinations = [
  {
    id: "1",
    title: "Kawah Ijen",
    location: "Banyuwangi",
    category: "Pegunungan",
    image: ijenImage,
    rating: 4.6,
  },
  {
    id: "2",
    title: "Jatim Park 3",
    location: "Batu",
    category: "Edukasi",
    image: jatimpark,
    rating: 4.7,
  },
  {
    id: "3",
    title: "Karimun",
    location: "Kep. Karimun",
    category: "Pantai",
    image: karimun,
    rating: 4.8,
  },
  {
    id: "4",
    title: "Bromo",
    location: "Lumajang",
    category: "Pegunungan",
    image: bromo,
    rating: 4.7,
  },
  {
    id: "5",
    title: "Curug Cikaso",
    location: "Sukabumi",
    category: "Air Terjun",
    image: cikaso,
    rating: 4.8,
  },
  
  {
    id: "7",
    title: "Pandawa",
    location: "Bali",
    category: "Pantai",
    image: pandawa,
    rating: 4.8,
  },
  {
    id: "8",
    title: "Raja Ampat",
    location: "Papua",
    category: "Pantai",
    image: rajaampat,
    rating: 4.9,
  },
  {
    id: "9",
    title: "Rinjani",
    location: "Lombok",
    category: "Pegunungan",
    image: rinjani,
    rating: 4.8,
  },
  {
    id: "10",
    title: "Saloka",
    location: "Semarang",
    category: "Edukasi",
    image: saloka,
    rating: 4.7,
  },
  {
    id: "11",
    title: "TMII",
    location: "Jakarta",
    category: "Edukasi",
    image: tmii,
    rating: 4.9,
  },{
    id: "6",
    title: "Mandakaripura",
    location: "Probolinggo",
    category: "Air Terjun",
    image: madakaripura,
    rating: 4.6,
  },
  {
    id: "12",
    title: "Tumpak Sewu",
    location: "Lumajang",
    category: "Air Terjun",
    image: tumpaksewu,
    rating: 4.8,
  },
];
function AppLayout() {
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
              {destinations.slice(0, 5).map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pt-1 basis-1/2 max-h-[300px]"
                >
                  <CardRecommendation
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    imageUrl={item.image}
                    onClick={() => alert(`${item.title} dipilih`)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <section className="px-6 py-2">
          <h2 className="text-lg font-semibold pb-2">What's popular</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
            {destinations.slice(0, 12).map((item) => (
              <PopularCard
                key={item.id}
                title={item.title}
                location={item.location}
                imageUrl={item.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Menu
        items={[
          { label: "Home", icon: Home, to: "/home" },
          { label: "Bookmark", icon: Bookmark, to: "/bookmark" },
          { label: "Explore", icon: Compass, to: "/explore" },
          { label: "Booking", icon: TicketPercent, to: "/booking" },
          { label: "Setting", icon: Settings, to: "/settings" },
        ]}
      />
    </>
  );
}

export default AppLayout;
