import PopularCard from "@/components/destination/cardPopular";
import AppLayout from "@/layouts/appLayout";
import type { Destination } from "@/lib/data/data";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  type Booking = Destination[];
  const booking: Booking = JSON.parse(localStorage.getItem("booking") || "[]");

  return (
    <AppLayout>
      {booking.length === 0 ? (
        <p>you haven't bookinged any destinations yet.</p>
      ) : (
        <div className="">
          {booking.map((item) => (
            <PopularCard
            id={item.id}
              key={item.id}
              title={item.title}
              location={item.location}
              imageUrl={item.imageUrl}
              onClick={() => navigate(`/destination/${item.id}`)}
            />
          ))}
        </div>
      )}
    </AppLayout>
  );
}
