
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  label: string;
  icon: LucideIcon;
  to: string;
}

interface MenuProps {
  items: MenuItem[];
  className?: string;
}

export default function Menu({ items, className }: MenuProps) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-white border-t inset-shadow-md shadow-primary flex justify-around py-2",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center text-xs md:text-sm md:font-normal text-primary transition-all",
                isActive && "text-primary/70 font-semibold"
              )
            }
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8 my-1 md:my-2"  />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
