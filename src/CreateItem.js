import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';

const CreateItem = () => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [shopName, setShopName] = useState();
  const [itemDescription, setItemDescription] = useState();
  const { listOfItems, setListOfItems } = useContext(ItemsContext);

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
    <form className='newItem' onSubmit={addItem}>
      <label>
        Data
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </label>

      <label>
        Kwota
        <input
          type='text'
          name='amount'
          value={amount}
          step='.01'
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </label>

      <label>
        Sklep
        <input
          type='text'
          name='shopName'
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        ></input>
      </label>

      <label>
        Opis
        <input
          type='text'
          name='desctiption'
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        ></input>
      </label>

      <button>Dodaj</button>
    </form>
  );
};

export default CreateItem;
