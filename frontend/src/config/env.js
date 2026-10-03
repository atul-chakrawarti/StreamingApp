const getEnv = (key, fallback) => {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : value;
};

// When no build arg is given, call the same host the page was loaded from.
// This lets one image work behind any Ingress URL.
const ORIGIN = window.location.origin;

export const AUTH_API_URL = getEnv('REACT_APP_AUTH_API_URL', `${ORIGIN}/api`);
export const STREAMING_API_URL = getEnv('REACT_APP_STREAMING_API_URL', `${ORIGIN}/api`);
export const STREAMING_PUBLIC_URL = getEnv('REACT_APP_STREAMING_PUBLIC_URL', ORIGIN);
export const ADMIN_API_URL = getEnv('REACT_APP_ADMIN_API_URL', `${ORIGIN}/api/admin`);
export const CHAT_API_URL = getEnv('REACT_APP_CHAT_API_URL', `${ORIGIN}/api/chat`);
export const CHAT_SOCKET_URL = getEnv('REACT_APP_CHAT_SOCKET_URL', ORIGIN);
