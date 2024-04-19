const useLocalStorage = (dataLocalStorage: any, nameLocalStorage: string) => {
  return {
    setItems: () => {
      return localStorage.setItem(nameLocalStorage, JSON.stringify(dataLocalStorage) as string);
    },
    getItems: () => {
      return JSON.parse(localStorage.getItem(nameLocalStorage) as string);
    },
    removeItems: () => {
      return localStorage.removeItem(nameLocalStorage);
    },
  };
};

export { useLocalStorage };
