import { Box, Stack, TextField } from "@mui/material";
import React, { createContext, FormEvent, useContext, useState, type FC } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};
type UserType<T, U> = {
  name: T;
  email: U;
  username: T;
};

type ConvertDataType = {
  is_staff: boolean;
  response_data: {
    name: string;
    username: string | null;
    email_user: string | null;
  };
};

type EventRenderClientData = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

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
  const [valueTextField, setValueTextField] = useState<string>("");

  const _changeHandlerRenderClientData = (event: EventRenderClientData, value_render: U): void => {
    const convertData = (data: Omit<ConvertDataType, "response_data">[]) => {
      let first_value: T[] = [] as T[] & { id: number }[];
      const instanseValue = event.target.value;
      const changedValue = data.map((item_data: Omit<ConvertDataType, "response_data">, index_data: number) => {
        const new_value = first_value.push({
          id: index_data,
        } as T);
        return {
          ...item_data,
          value: instanseValue,
          new_value,
        };
      });
      return [...changedValue];
    };
  };

  return (
    <React.Fragment>
      <Stack>
        <Box>
          <TextField
            onChange={({target: {value}}) => setValueTextField(value)}
            value={valueTextField}
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
}

export { UserContextProvider, RenderClientData };
