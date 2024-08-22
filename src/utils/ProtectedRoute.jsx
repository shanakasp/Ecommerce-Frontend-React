import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ authenticate, children }) {
  if (!authenticate) {
    return <Navigate to="/register" />;
  }

  return children;
}

export default ProtectedRoute;
