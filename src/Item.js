import { useContext, useState } from 'react';
import { ItemsContext } from './ItemsContext';

const Item = ({ date, amount, shopName, itemDescription, id }) => {
  const { listOfItems, setListOfItems } = useContext(ItemsContext);
  const { itemsCompleted, setItemsCompleted } = useContext(ItemsContext);

  const markCompletedItem = (id) => {
    const itemCompleted = listOfItems.filter((el) => el.id == id);

    const listOfItemsFiltered = listOfItems.filter((el) => el.id !== id);
    setListOfItems(listOfItemsFiltered);
    setItemsCompleted([...itemCompleted, ...itemsCompleted]);
  };

  return (
    <>
      <div className='table-item' key={id}>
        <p className='date'>{date}</p>
        <p className='amount'>{amount}</p>
        <p className='shop'>{shopName}</p>
        <p className='description'>{itemDescription}</p>
        <button className='btn' onClick={() => markCompletedItem(id)}>
          Rozliczone
        </button>
      </div>
    </>
  );
};

export default Item;
