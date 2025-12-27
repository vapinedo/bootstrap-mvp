// Contexts
export { ThemeProvider, useTheme } from '@theme/context/ThemeContext.jsx';
export { SidebarProvider, useSidebar } from '@theme/context/SidebarContext.jsx';

// Layout
export { Backdrop } from '@theme/layout/Backdrop.jsx';
export { AppHeader } from '@theme/layout/AppHeader.jsx';
export { AppLayout } from '@theme/layout/AppLayout.jsx';
export { AppSidebar } from '@theme/layout/AppSidebar.jsx';

// Components
export { Dropdown } from '@theme/components/ui/dropdown/Dropdown.jsx';
export { UserDropdown } from '@theme/components/header/UserDropdown.jsx';
export { DropdownItem } from '@theme/components/ui/dropdown/DropdownItem.jsx';
export { ThemeToggleButton } from '@theme/components/common/ThemeToggleButton.jsx';
export { NotificationDropdown } from '@theme/components/header/NotificationDropdown.jsx';

// Icons (puedes importar individualmente o usar index.ts si lo tienes tipado)
export * as Icons from '@theme/icons';
