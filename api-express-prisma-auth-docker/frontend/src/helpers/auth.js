export const setToken = (token) => {
localStorage.setItem("token", token);
};

export const getToken = () => localStorage.getItem("token");

export const removeToken = () => localStorage.removeItem("token");

export const authHeader = () => {
const token = getToken();
if (token) return { Authorization: `Bearer ${token}` };
return {};
};

export const isLoggedIn = () => !!getToken();

export function parseJWT(token) {
try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
    atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join('')
    );
    return JSON.parse(jsonPayload);
} catch {
    return null;
}
}
export function getUserData() {
const token = getToken();
return token ? parseJWT(token) : null;
}
export function isTokenExpired() {
const userData = getUserData();
if (!userData || !userData.exp) return true;
  return userData.exp * 1000 < Date.now();
}