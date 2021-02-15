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

  return (
    <div className='container'>
      <form className='new-item' onSubmit={addItem}>
        {/* <div> */}
        <label>Data</label>
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        {/* </div> */}
        {/* <div> */}
        <label>Kwota</label>
        <input
          type='text'
          name='amount'
          value={amount}
          step='.01'
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        {/* </div> */}
        {/* <div> */}
        <label>Sklep</label>
        <input
          type='text'
          name='shopName'
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        ></input>
        {/* </div> */}
        {/* <div> */}
        <label>Opis</label>
        <textarea
          rows='4'
          // cols='20'
          name='desctiption'
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        ></textarea>
        {/* </div> */}

        <button>Dodaj</button>
      </form>
    </div>
  );
};

export default CreateItem;
