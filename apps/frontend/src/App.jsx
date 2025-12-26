
import 'tabler-react/dist/Tabler.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import UsersPage from './security/users/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="/usuarios" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
