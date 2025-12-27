import { ThemeProvider } from '@theme';
import { AppRouter } from '@/AppRouter.jsx';

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}