import { AppRouter } from '@/AppRouter.jsx';
import { ThemeProvider } from '@shared/theme';

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}