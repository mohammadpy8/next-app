const useLocalStorage = (
  typeLocalStorage: "SET_ITEMS" | "GET_ITEMS" | "REMOVE_ITEMS",
  dataLocalStorage: any,
  nameLocalStorage: string
) => {
  switch (typeLocalStorage) {
    case "SET_ITEMS":
      return localStorage.setItem(
        nameLocalStorage,
        JSON.stringify(dataLocalStorage)
      );
    case "GET_ITEMS":
      return JSON.parse(localStorage.getItem(nameLocalStorage) as string);
    case "REMOVE_ITEMS":
      return localStorage.removeItem(nameLocalStorage);
  }
};

export default useLocalStorage;
