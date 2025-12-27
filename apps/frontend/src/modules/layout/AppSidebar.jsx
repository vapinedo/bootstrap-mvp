import { useSidebar } from "../context/SidebarContext";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
];

export default function AppSidebar() {
  const { isExpanded, isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const location = useLocation();

  return (
    <aside
      className={`fixed z-40 h-full bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      } ${isMobileOpen ? "block" : "hidden lg:block"}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-bold">Logo</span>
        <button className="lg:hidden" onClick={toggleMobileSidebar}>
          <span className="sr-only">Close Sidebar</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              location.pathname === item.path ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
            }`}
            onClick={isMobileOpen ? toggleMobileSidebar : undefined}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
        onClick={toggleSidebar}
      >
        {isExpanded ? "Colapsar" : "Expandir"}
      </button>
    </aside>
  );
}
