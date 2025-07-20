import PopularCard from "@/components/destination/cardPopular";
import AppLayout from "@/layouts/appLayout";
import type { Destination } from "@/lib/data/data";
import { useNavigate } from "react-router-dom";

export default function BookmarkPage() {
  const navigate = useNavigate();
  type Bookmark = Destination[];
  const bookmark: Bookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");

  return (
    <AppLayout>
      {bookmark.length === 0 ? (
        <p>you haven't bookmarked any destinations yet.</p>
      ) : (
        <div className="">
          {bookmark.map((item) => (
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
