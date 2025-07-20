import { type ReactNode } from "react";
import { Home, Compass, Bookmark, TicketPercent, Settings } from "lucide-react";
import Menu from "@/components/navigation/menu";

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main className="pb-20">{children}</main>

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

export default AppLayout;
