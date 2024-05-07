import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./login.jsx";
import Profile from "./profile.jsx";

import ErrorElement from "./pageError/errorElement.jsx";
import AuthenticationLayout from "../component/layout/authenticationLayout.jsx";

import NotFound from "./pageError/notFound.jsx";
import RequireAuth from "./requireAuth.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorElement />} path="/">
      {/* protected route */}
      <Route element={<RequireAuth />}>
        <Route
          path="dashboard"
          errorElement={<ErrorElement />}
          element={<Profile />}
        />
      </Route>
      {/* check Authentication */}
      <Route
        path="/"
        element={
          <Navigate
            to={
              JSON.parse(localStorage.getItem("user"))?.token
                ? "/dashboard"
                : "/authentication/login"
            }
            replace
          />
        }
      />
      <Route path="*" element={<NotFound />} />
      {/* Authentication and public page */}
      <Route
        errorElement={<ErrorElement />}
        path="authentication"
        element={<AuthenticationLayout />}
      >
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);

export default router;
