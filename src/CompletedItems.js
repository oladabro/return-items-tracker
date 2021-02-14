import { useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import Item from './Item';

const CompletedItems = () => {
  const { itemsCompleted, setItemsCompleted } = useContext(ItemsContext);

  return (
    <div className='item-completed'>
      {itemsCompleted.length == 0
        ? ''
        : itemsCompleted.map((item) => {
            return (
              <Item
                date={item.date}
                amount={item.amount}
                shopName={item.shopName}
                itemDescription={item.itemDescription}
                key={item.id}
                id={item.id}
              />
            );
          })}
    </div>
  );
};

export default CompletedItems;
