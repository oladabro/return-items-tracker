import React, { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';

const CreateItem = () => {
  const {
    date,
    setDate,
    amount,
    setAmount,
    shopName,
    setShopName,
    itemDescription,
    setItemDescription,
    addItem,
  } = useContext(ItemsContext);

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
          required
        ></input>

        <input
          type='text'
          name='shopName'
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          placeholder='sklep'
          required
        ></input>

        <textarea
          rows='4'
          name='desctiption'
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder='opis'
          required
        ></textarea>

        <button>Dodaj</button>
      </form>
    </div>
  );
};

export default CreateItem;
