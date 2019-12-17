import userReducer from './user/user.reduсer';
import cartReducer from './cart/cart.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})