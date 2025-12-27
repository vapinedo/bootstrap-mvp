
import { useState } from "react";
import { GridIcon, UserCircleIcon } from '@icons';
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

// Puedes reemplazar estos SVG por tus propios íconos o importarlos
const ProfileIcon = () => <span className="inline-block w-5 h-5 bg-gray-400 rounded" />;
const SettingsIcon = () => <span className="inline-block w-5 h-5 bg-gray-400 rounded" />;
const ChevronDownIcon = ({ open }) => (
  <span className={`inline-block w-4 h-4 ml-auto transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
);

const navItems = [
  {
    name: "Dashboard",
    icon: <GridIcon />,
    subItems: [
      { name: "Ecommerce", path: "/" },
    ],
  },
  {
    name: "Profile",
    icon: <UserCircleIcon />,
    path: "/profile",
  }
];

export default function AppSidebar() {
  const { isExpanded, isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <aside
      className={`fixed z-40 h-full bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-all duration-300
        ${isExpanded ? "w-64" : "w-20"} ${isMobileOpen ? "block" : "hidden lg:block"}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/">
          {/* Logo gráfico, reemplaza src por tu logo real */}
          <img src="/images/logo/logo.svg" alt="Logo" className="h-8 w-auto dark:hidden" />
          <img src="/images/logo/logo-dark.svg" alt="Logo" className="h-8 w-auto hidden dark:block" />
        </Link>
        <button className="lg:hidden" onClick={toggleMobileSidebar}>
          <span className="sr-only">Close Sidebar</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          {navItems.map((item, idx) => (
            <li key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      openSubmenu === idx ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
                    }`}
                    onClick={() => handleSubmenuToggle(idx)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {isExpanded && item.name}
                    {isExpanded && <ChevronDownIcon open={openSubmenu === idx} />}
                  </button>
                  {openSubmenu === idx && isExpanded && (
                    <ul className="ml-8 mt-1 flex flex-col gap-1">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className={`block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
                              location.pathname === sub.path ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
                            }`}
                            onClick={isMobileOpen ? toggleMobileSidebar : undefined}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    location.pathname === item.path ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
                  }`}
                  onClick={isMobileOpen ? toggleMobileSidebar : undefined}
                >
                  <span className="mr-2">{item.icon}</span>
                  {isExpanded && item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
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
