export async function fetchUsers() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/security/users`);
  if (!response.ok) {
    throw new Error('Error al obtener usuarios');
  }
  return response.json();
}
