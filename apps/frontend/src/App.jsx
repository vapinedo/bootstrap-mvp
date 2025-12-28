import { AppRouter } from '@root/AppRouter';
import { ThemeProvider } from '@shared/theme';

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}