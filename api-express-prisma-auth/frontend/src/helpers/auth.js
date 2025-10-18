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