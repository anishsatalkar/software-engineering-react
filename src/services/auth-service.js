import axios from "axios";

const AUTH_API = `${BASE_URL}/api/auth`

const api = axios.create({
    withCredentials: true
});

export const signup = (user) =>
    api.post(`${AUTH_API}/signup`, user)
        .then(response => response.data);

export const profile = () =>
    api.post(`${AUTH_API}/profile`)
        .then(response => response.data);

export const logout = (user) =>
    api.post(`${AUTH_API}/logout`, user)
        .then(response => response.data);