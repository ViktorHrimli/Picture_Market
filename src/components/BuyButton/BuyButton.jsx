// import { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const StripeButton = props => {
//   const [stripeError, setStripeError] = useState(null);
//   const [stripe, setStripe] = useState(null);

//   useEffect(async () => {
//     if (!stripe) {
//       // Here, you can use some `props` instead of hardcoding the API key
//       const stripeTmp = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
//       setStripe(stripeTmp);
//     }
//   });
//   const handleClick = () => {
//     // Reset error holder
//     setStripeError(null);

//     // When the customer clicks on the button, redirect
//     // them to Checkout.
//     stripe
//       .redirectToCheckout({
//         // Here you can use another `prop` instead of hard coding it
//         lineItems: [{ price: 'price_1Heree568gerg54rtretrt', quantity: 1 }],
//         mode: 'subscription',
//         // Do not rely on the redirect to the successUrl for fulfilling
//         // purchases, customers may not always reach the success_url after
//         // a successful payment.
//         // Instead use one of the strategies described in
//         // https://stripe.com/docs/payments/checkout/fulfill-orders
//         successUrl: 'https://myweb.com/success',
//         cancelUrl: 'https://myweb.com/canceled',
//       })
//       .then(function (result) {
//         if (result.error) {
//           // If `redirectToCheckout` fails due to a browser or network
//           // error, display the localized error message to your customer.
//           setStripeError(result.error.message);
//         }
//       });
//   };

//   return (
//     <>
//       {stripe ? (
//         <button
//           style="background-color:#6772E5;color:#FFF;padding:8px 12px ;border:0;border-radius:4px;font-size:1em"
//           id="checkout-button-price_1Heree568gerg54rtretrt"
//           role="link"
//           type="button"
//           onClick={handleClick}
//         >
//           Checkout
//         </button>
//       ) : (
//         'Loading...'
//       )}
//       {stripeError ? <div id="error-message">{stripeError}</div> : null}
//     </>
//   );
// };

// export default StripeButton;
