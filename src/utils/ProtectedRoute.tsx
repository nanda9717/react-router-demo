import { FC, ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute: FC<{ children: ReactNode}>= ({children}) => {
  const isLoggedIn = false;
  if(!isLoggedIn){
    return <Navigate to="/" />
  }

  return children
}
export default ProtectedRoute;
