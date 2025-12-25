import 'tabler-react/dist/Tabler.css';
import Login from './components/Login.jsx';

function App() {
  // Aquí puedes manejar la lógica de login real
  const handleLogin = async ({ email, password }) => {
    // Lógica de autenticación (ejemplo: llamada a API)
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return <Login onLogin={handleLogin} />;
}

export default App;
