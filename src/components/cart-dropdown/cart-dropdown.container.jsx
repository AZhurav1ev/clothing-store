import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropDownContainer = compose(
    connect(mapStateToProps),
    withRouter
)(CartDropdown);

export default CartDropDownContainer; 