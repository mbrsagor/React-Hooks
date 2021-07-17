const BASE_URL = process.env.REACT_APP_BACKEND_API || "http://localhost:8000";
const apiURL = "/api";

export const endpoint = `${BASE_URL}${apiURL}`;

export const account = `${endpoint}/accounts`;
export const category = `${endpoint}/category/`;
export const inventoryCategory = `${category}/inventory-category/`;

export const loginURL = `${account}/login/`;
export const signupURL = `${account}/register/`;
export const passwordChangeURL = (id) => `${account}/password-change/${id}/`;
export const accountUpdateURL = (id) => `${account}/${id}/update-account/`;
export const accountDetailURL = (id) => `${account}/${id}/account/`;
