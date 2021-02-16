import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';

const CreateItem = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [shopName, setShopName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
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

  const clearPlaceholder = (e) => {
    e.target.placeholder = '';
  };

  return (
    <div className='container'>
      <form className='new-item' onSubmit={addItem}>
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder='date'
          required
        ></input>

        <input
          type='text'
          name='amount'
          value={amount}
          step='.01'
          placeholder='kwota'
          onChange={(e) => setAmount(e.target.value)}
          // onFocus={clearPlaceholder}
          // onBlur={(e) => (e.target.placeholder = 'kwota')}
          required
        ></input>

        <input
          type='text'
          name='shopName'
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          placeholder='sklep'
          // onFocus={clearPlaceholder}
          // onBlur={(e) => (e.target.placeholder = 'sklep')}
          required
        ></input>

        <textarea
          rows='4'
          // cols='20'
          name='desctiption'
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          // onFocus={clearPlaceholder}
          placeholder='opis'
          // onBlur={(e) => (e.target.placeholder = 'opis')}
          required
        ></textarea>

        <button>Dodaj</button>
      </form>
    </div>
  );
};

export default CreateItem;
