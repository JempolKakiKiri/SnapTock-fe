import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, ScanLine, Menu, X } from "lucide-react";
import logo from "../../../assets/SnapTock-logo.webp";

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Scan", href: "/scan", icon: ScanLine },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Buka menu"
        className="fixed left-4 top-4 z-30 rounded-xl bg-green-700 p-2 text-white shadow-lg md:hidden"
      >
        <Menu size={22} />
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={[
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 flex-col",
          "bg-green-700 text-white border-r-2 border-r-black",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
          "md:static md:z-auto md:w-20 md:translate-x-0 lg:w-65",
        ].join(" ")}
      >
        <div className="flex items-center gap-2 px-4 py-5 md:justify-center lg:justify-start lg:px-5">
          <img
            src={logo}
            alt="snaptock logo"
            width={57}
            height={57}
            loading="eager"
            decoding="async"
            className="pointer-events-none size-11 shrink-0 select-none lg:size-14.25"
          />

          <div className="leading-tight text-white md:hidden lg:block">
            <h1 className="select-none font-inter-800 text-2xl lg:text-[32px]">
              SnapTock
            </h1>
            <p className="select-none font-inter-400 text-[14px]">
              Smart Inventory
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="ml-auto rounded-lg p-1.5 hover:bg-green-600 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-1 px-3">
          {NAV.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.href}
                to={item.href}
                title={item.label}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-xl px-3 py-2.5",
                    "font-inter-500 text-[16px] transition-colors",
                    "md:justify-center lg:justify-start",
                    isActive
                      ? "bg-green-600 font-inter-700 text-white"
                      : "text-white/60 hover:bg-green-600/60",
                  ].join(" ")
                }
              >
                <Icon size={20} strokeWidth={2} className="shrink-0" />
                <span className="md:hidden lg:inline">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;