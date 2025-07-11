import { Home, Compass, Bookmark, User, Settings } from "lucide-react";
import Menu from "@/components/navigation/menu";
import CardRecommendation from "@/components/card/card-recomendation";
import ijenImage from "@/assets/ijen.jpg";

function AppLayout() {
  return (
    <div className="app-layout min-h-screen flex flex-col">
      <header className="app-header p-4 bg-white shadow">
        <h1 className="text-xl font-bold">My Application</h1>
      </header>

      <main className="app-content flex-1 p-4">
        <CardRecommendation
          title="Kawah Ijen"
          location="Banyuwangi"
          rating={4.8}
          imageUrl={ijenImage}
          onClick={() => alert("Kawah Ijen dipilih")}
        />
      </main>

      <Menu
        items={[
          { label: "Home", icon: Home, to: "/home" },
          { label: "Bookmark", icon: Bookmark, to: "/bookmark" },
          { label: "Explore", icon: Compass, to: "/explore" },
          { label: "Setting", icon: Settings, to: "/settings" },
          { label: "Profile", icon: User, to: "/profile" },
        ]}
      />
    </div>
  );
}

export default AppLayout;
