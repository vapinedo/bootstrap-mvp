interface BuildFetchOptionsProps {
    method: string;
    headers: Record<string, string>;
    body?: any;
}

export function buildFetchOptions(props: BuildFetchOptionsProps): RequestInit {

  const { method, headers, body } = props;
  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }
  
  return fetchOptions;
}
