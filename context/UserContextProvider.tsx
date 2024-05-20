import React, { createContext, useContext, useState, type FC } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};
type UserType<T, U> = {
  name: T;
  email: U;
  username: T;
};

type UserContextType = {
  user: null | UserType<string, string>;
  setUser: React.Dispatch<React.SetStateAction<UserType<string, string> | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType<string, string> | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext === undefined || userContext === null) throw new Error("UserContext invalid");
  return userContext;
};

function RenderClientData<T, U>(props: T | U) {
  return <React.Fragment></React.Fragment>;
}

export { UserContextProvider, RenderClientData };
