import { useSidebar } from "../context/SidebarContext";

export default function AppHeader() {
  // Puedes personalizar este header según tus necesidades
  return (
    <header className="sticky top-0 flex w-full bg-white border-b border-gray-200 z-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          className="lg:hidden p-2 rounded text-gray-500 dark:text-gray-400"
          onClick={useSidebar().toggleMobileSidebar}
        >
          <span className="sr-only">Toggle Sidebar</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="font-bold text-lg">Mi Panel</div>
        <div></div>
      </div>
    </header>
  );
}
