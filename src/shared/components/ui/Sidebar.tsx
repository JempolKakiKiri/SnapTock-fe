import { NavLink } from "react-router-dom";
import {LayoutDashboard, ScanBox} from "lucide-react";

const Nav = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Scan",
    href: "/scan",
    icon: ScanBox
  }
]

const Sidebar = () => {
  return (
    <aside className="flex h-screen lg:w-65 shrink-0 flex-col bg-green-700 text-white border-r-2 border-r-black">
      <div className="flex items-center gap-2 px-5 py-5">
        <img src="/SnapTock-logo.webp" alt="snaptock logo" width={57} height={57} loading="eager" decoding="async"/>

        <div className="text-white leading-tight">
          <h1 className="font-inter-800 text-[32px]">SnapTock</h1>
          <p className="text-[14px] font-inter-400">
            Smart Inventory
          </p>
        </div>
      </div>

      <nav className="mt-4 flex flex-col gap-1 px-3">
        {Nav.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-xl px-3 py-2.5",
                  "text-[16px] font-inter-500 transition-colors",
                  isActive
                    ? "bg-green-600 text-white  font-inter-700"
                    : "text-white/60 hover:bg-green-600/60",
                ].join(" ")
              }
            >
              <Icon size={16} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;