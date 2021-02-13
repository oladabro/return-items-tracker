import React, { useContext } from 'react';
import Item from './Item';
import { ItemsContext } from './ItemsContext';

const ListItems = () => {
  const [listOfItems, setListOfItems] = useContext(ItemsContext);
  return (
    <>
      <div className='table-header'>
        <p className='date'>Data</p>
        <p className='amount'>Kwota</p>
        <p className='shop'>Sklep</p>
        <p className='description'>Opis</p>
      </div>

      {listOfItems.map((item) => {
        return (
          <Item
            date={item.date}
            amount={item.amount}
            shopName={item.shopName}
            itemDescription={item.itemDescription}
            key={item.id}
          />
        );
      })}
    </>
  );
};

export default ListItems;
