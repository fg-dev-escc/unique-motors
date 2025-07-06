export const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing JWT:', error);
    return null;
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;
  
  const decoded = parseJwt(token);
  if (!decoded || !decoded.exp) return true;
  
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};

export const getTokenFromStorage = () => {
  return localStorage.getItem('token');
};

export const setTokenToStorage = (token) => {
  localStorage.setItem('token', token);
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem('token');
};