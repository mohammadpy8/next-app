const useLocalStorage = (
  dataLocalStorage: any,
  nameLocalStorage: string
) => {
  return {
    SetItems: () => {
      return localStorage.setItem(
        nameLocalStorage,
        JSON.stringify(dataLocalStorage) as string
      );
    },
    GetItems: () => {
      return JSON.parse(localStorage.getItem(nameLocalStorage) as string);
    },
    RemoveItems: () => {
      return localStorage.removeItem(nameLocalStorage);
    },
  };
};

export { useLocalStorage };
