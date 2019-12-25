import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_l2UZMPedClL32ULSop2d5xPi00ijoiNiiz';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Shop'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;

