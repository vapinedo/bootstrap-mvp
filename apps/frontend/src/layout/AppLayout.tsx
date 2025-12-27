import { SidebarProvider } from "../context/SidebarContext";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Backdrop from "./Backdrop";
import { Outlet } from "react-router-dom";

const LayoutContent: React.FC = () => {
  // El hook useSidebar se importa y usa en los componentes hijos
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <AppHeader />
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export default AppLayout;
