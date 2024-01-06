import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const CartButton = () => {
    const cartProductsLength=useSelector(state=>state.cart.products.length);
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartProductsLength} color="success">
        <ShoppingCartIcon style={{ color: 'white' }}/>
      </Badge>
    </IconButton>
  );
};

export default CartButton;
