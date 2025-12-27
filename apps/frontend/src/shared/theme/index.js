// Contexts
export { ThemeProvider, useTheme } from '@shared/theme/context/ThemeContext.jsx';
export { SidebarProvider, useSidebar } from '@shared/theme/context/SidebarContext.jsx';

// Layout
export { Backdrop } from '@shared/theme/layout/Backdrop.jsx';
export { AppHeader } from '@shared/theme/layout/AppHeader.jsx';
export { AppLayout } from '@shared/theme/layout/AppLayout.jsx';
export { AppSidebar } from '@shared/theme/layout/AppSidebar.jsx';

// Components
export { Dropdown } from '@shared/theme/components/ui/dropdown/Dropdown.jsx';
export { UserDropdown } from '@shared/theme/components/header/UserDropdown.jsx';
export { DropdownItem } from '@shared/theme/components/ui/dropdown/DropdownItem.jsx';
export { ThemeToggleButton } from '@shared/theme/components/common/ThemeToggleButton.jsx';
export { NotificationDropdown } from '@shared/theme/components/header/NotificationDropdown.jsx';

// Icons (puedes importar individualmente o usar index.ts si lo tienes tipado)
export * as Icons from '@shared/theme/icons';
