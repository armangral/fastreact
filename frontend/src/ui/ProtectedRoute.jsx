import { useUser } from "../features/authentication/useUser";

import Spinner from "../ui/Spinner";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const FullPage = ({ children }) => (
  <div className="h-screen bg-gray-50 flex items-center justify-center">
    {children}
  </div>
);

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2 . if not authenticated, redirect to login page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. if loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if user render app
  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
