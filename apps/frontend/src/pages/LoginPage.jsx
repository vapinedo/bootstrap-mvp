import { useState } from 'react';
import { Card, Form, Button } from 'tabler-react';
import { useLoginApi } from '../hooks/useLoginApi.js';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, token } = useLoginApi();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result) {
      navigate('/dashboard');
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
                autoComplete="new-email"
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
                autoComplete="new-password"
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
