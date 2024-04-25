"use client";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { getUser } from "@/api/user";
import { User } from "@/interfaces/User";

interface AuthContextProps {
  user?: User | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = React.createContext<AuthContextProps>({
  user: null,
});
AuthContext.displayName = "AuthContext";

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const {
    data: user,
    isIdle,
    isPending,
    isError,
    isSuccess,
    mutate,
  } = useMutation({
    mutationFn: () => {
      return getUser();
    },
  });
  React.useEffect(() => {
    mutate();
  }, []);
  const value = React.useMemo(() => ({ user }), [user]);

  if (isPending || isIdle) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error Occured</div>;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} children={children} />; // Pass children prop
  }

  throw new Error(`Unhandled status: ${status}`);
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
