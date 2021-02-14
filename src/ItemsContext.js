import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsContextProvider = (props) => {
  const [listOfItems, setListOfItems] = useState([
    {
      id: 1,
      date: '2019-10-19',
      amount: '440',
      shopName: 'Massimo Dutti',
      itemDescription: 'spodnie',
    },
    {
      id: 2,
      date: '2019-10-30',
      amount: '200',
      shopName: 'Deichman',
      itemDescription: 'botki',
    },
    {
      id: 3,
      date: '2019-10-11',
      amount: '250',
      shopName: 'Polar Sport',
      itemDescription: 'buty aku',
    },
  ]);

  const [itemsCompleted, setItemsCompleted] = useState([]);

  return (
    <ItemsContext.Provider
      value={{ listOfItems, setListOfItems, itemsCompleted, setItemsCompleted }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
