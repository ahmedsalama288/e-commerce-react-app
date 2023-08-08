export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null; // Return true if token exists, indicating the user is logged in
};

