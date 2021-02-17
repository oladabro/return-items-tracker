import React, { createContext, useEffect, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsContextProvider = (props) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [shopName, setShopName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const [listOfItems, setListOfItems] = useState(() => {
    const localData = localStorage.getItem('listOfItems');

    return localData ? JSON.parse(localData) : [];
  });

  const [itemsCompleted, setItemsCompleted] = useState(() => {
    const localData = localStorage.getItem('itemsCompleted');

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('listOfItems', JSON.stringify(listOfItems));
  }, [listOfItems]);

  useEffect(() => {
    localStorage.setItem('itemsCompleted', JSON.stringify(itemsCompleted));
  }, [itemsCompleted]);

  const addItem = (event) => {
    event.preventDefault();

    let newItem = {
      id: listOfItems.length + 1,
      date,
      amount,
      shopName,
      itemDescription,
    };

    setListOfItems((prevListOfItems) => [...prevListOfItems, newItem]);

    setDate('');
    setAmount('');
    setShopName('');
    setItemDescription('');
  };

  return (
    <ItemsContext.Provider
      value={{
        listOfItems,
        setListOfItems,
        itemsCompleted,
        setItemsCompleted,
        date,
        setDate,
        amount,
        setAmount,
        shopName,
        setShopName,
        itemDescription,
        setItemDescription,
        addItem,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
