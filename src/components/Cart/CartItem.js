import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>   {/* item price */} 
          <span className={classes.amount}> x {props.amount} </span> {/*here is updated items*/}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>  {/* increment */}
        <button onClick={props.onAdd}>+</button>     {/* decrement */}
        {/* <button onClick={props.onRemove}>Delete</button> */}
      </div>
    </li>
  );
};

export default CartItem;