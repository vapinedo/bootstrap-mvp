import { useState } from 'react';
import { Card, Form, Button } from 'tabler-react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Aquí deberías llamar a tu API de login
      await onLogin?.({ email, password });
    } catch (err) {
      setError('Credenciales inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: '40px auto' }}>
      <Card>
        <Card.Body>
          <Card.Title>Iniciar sesión</Card.Title>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="usuario@correo.com"
                required
                className="form-control"
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Contraseña <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                className="form-control"
                style={{ width: '100%' }}
              />
            </div>
            {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
            <Button color="primary" type="submit" loading={loading} block>
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
