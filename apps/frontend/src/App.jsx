import { AppRouter } from '@/AppRouter.jsx';
import { ThemeProvider } from './context/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}