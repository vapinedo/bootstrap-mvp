const apiUrl = import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, { method = 'GET', body, headers = {}, params } = {}) {
  let url = `${apiUrl}${endpoint}`;
  if (params && typeof params === 'object') {
    const query = new URLSearchParams(params).toString();
    url += `?${query}`;
  }
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.status}`);
  }
  return response.json();
}
