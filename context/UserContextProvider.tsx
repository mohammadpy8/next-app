import { Box, Stack, TextField, useTheme } from "@mui/material";
import React, { createContext, FormEvent, useContext, useState, type FC } from "react";
import type { Typography } from "@mui/material";

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

type DefaultProps<T> = {
  all_data: string[];
  typeData: T;
};

type EventRenderClientData = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type UserContextType = {
  user: null | UserType<string, string>;
  setUser: React.Dispatch<React.SetStateAction<UserType<string, string> | null>>;
  _changeHandlerRenderClientData: <T, U>(event: EventRenderClientData, value_render: U) => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType<string, string> | null>(null);

  const { typography, palette } = useTheme();

  console.log("textBase==>", typography, palette.customPalette?.green);
  const _changeHandlerRenderClientData = <T, U>(event: EventRenderClientData, value_render: U): void => {
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
      return [...changedValue, convertData];
    };
  };

  return <UserContext.Provider value={{ user, setUser, _changeHandlerRenderClientData }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext === undefined || userContext === null) throw new Error("UserContext invalid");
  return userContext;
};

function RenderClientData<T, U>(props: T) {
  const [valueTextField, setValueTextField] = useState<string>("");
  const [uniqeId, setUniqeId] = useState<number | null>(0);

  const ConvertDefaultProps = (uId: number) => {
    const loopProps = ((props as DefaultProps<U>).all_data as string[]).map((data: any, index: number) => ({
      id: index + 1,
      ...data,
    }));
    const filterData = loopProps.filter((data: any) => data?.id === uId);
    return [{ ...filterData }];
  };

  const _data = ConvertDefaultProps(uniqeId ?? 0);

  return (
    <React.Fragment>
      <Stack>
        <Box>
          <TextField onChange={({ target: { value } }) => setValueTextField(value)} value={valueTextField} />
          {_data &&
            _data.map((items, index) => {
              return (
                <React.Fragment key={index}>
                  <Box>{items}</Box>
                </React.Fragment>
              );
            })}
        </Box>
      </Stack>
    </React.Fragment>
  );
}

export { UserContextProvider, RenderClientData };
