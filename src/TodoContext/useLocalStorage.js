import React from "react";

export default function useLocalStoarge(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log(item);

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
/*
localStorage.removeItem("ODOS_VI");
const defaultTodos = [
{ text: 'Cortar cebolla', completed: true },
{ text: 'Tomar el Curso de Intro a React.is', completed: false },
{ text: 'Llorar con la Llorona', completed: false },
{ text: 'LALALALALA', completed: false },
{ text: 'Usar estados derivados', completed: true }
]
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/
