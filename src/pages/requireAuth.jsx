import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  console.log("aslan oomadi inja",auth);
  return auth?.token ? <Outlet /> : <Navigate to="/authentication/login" replace />;
};
export default RequireAuth;
