const Item = ({ date, amount, shopName, itemDescription }) => {
  return (
    <div className='table-item'>
      <p className='date'>{date}</p>
      <p className='amount'>{amount}</p>
      <p className='shop'>{shopName}</p>
      <p className='description'>{itemDescription}</p>
      <button className='btn'>Rozliczone</button>
    </div>
  );
};

export default Item;
