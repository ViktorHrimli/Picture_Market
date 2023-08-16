import { createPortal } from 'react-dom';
import { useState } from 'react';

import { AddYourReview } from 'components/Modal/ModalContent/AddYourReview/AddYourReview';

import { Section, Content, Closed, Close, HeaderBox, Text, Description, PreTitle, DescriptionEmail } from "./PaymentPolicy.styled"

const privacyRoot = document.querySelector('#privacy--root');


export default function PaymentPolicy({ isOpenPayment, handleTogglePayment }) {
  const [isOpenedForm, setIsOpenedForm] = useState(false);
  
  function handleToggleForm () {
    setIsOpenedForm(!isOpenedForm);
  }
  
  if (isOpenPayment) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  };

  return createPortal(

    <Section>
      <Content>
        <Closed>
          <Close onClick={handleTogglePayment} />
        </Closed>
        <HeaderBox>
          <img src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049746/String%20World/Group_128_4_wtjeu8.png"
            width="100"
            height="75"
            alt="logo" />
          <Text>Payment Policy:</Text>
        </HeaderBox>
        <div>
          <Description>At String World, we aim to provide a seamless and secure payment experience for our customers when purchasing our exquisite string art portraits. To ensure transparency and clarity, we have outlined our Payment Policy as follows:</Description>
          <Description>
            <PreTitle>Accepted Payment Methods: </PreTitle>
            We accept payments made via Visa and Mastercard credit and debit cards. For your convenience and security, all payments will be processed through a secure payment gateway provided by Stripe.</Description>
          <Description>
            <PreTitle>Payment Processing: </PreTitle>
            When you place an order on our website, you will be directed to the Stripe payment gateway to complete the transaction. Please note that we do not store any payment information on our servers. All payment details, including credit card information, are securely handled and processed by Stripe.
          </Description>
          <Description><PreTitle>Currency: </PreTitle>
            All prices displayed on our website are in British Pound (GBP), and your payment will be processed in GBP. If you are ordering from outside the United Kingdom, the final amount charged to your card may be subject to conversion fees by your bank or financial institution. Please check with your provider for further details.
          </Description>
          <Description>
            <PreTitle>Order Confirmation:</PreTitle> Once your payment is successfully processed, you will receive an order confirmation email containing the details of your purchase. If you do not receive this email within a reasonable time after payment, please contact our customer support team at <DescriptionEmail onClick={handleToggleForm}>designer@string-world.com</DescriptionEmail>.
          </Description>
          <Description>
            <PreTitle>Payment Security:</PreTitle> We take the security of your payment information seriously. Stripe employs industry-leading security measures to protect your financial data, ensuring that your transaction is safe and secure.
          </Description>
          <Description>
            <PreTitle>Payment Issues:</PreTitle> In the event of any payment-related issues or discrepancies, please reach out to our customer support team at <DescriptionEmail onClick={handleToggleForm}>designer@string-world.com</DescriptionEmail>. We will promptly investigate the matter and provide a resolution to the best of our ability.
          </Description>
          <Description>
            <PreTitle>Refund Policy:</PreTitle> For information regarding refunds and our refund policy, please refer to our dedicated Refund Policy page, which is included in our Privacy Policy.
          </Description>
          <Description>
            <PreTitle>Updates to the Payment Policy:</PreTitle> We reserve the right to update or modify this Payment Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this policy periodically to stay informed about our payment practices.
          </Description>
          <Description>
            <PreTitle></PreTitle> By proceeding with your purchase on our website, you acknowledge and agree to the terms and conditions outlined in this Payment Policy.
          </Description>
          <Description>
            <PreTitle></PreTitle>If you have any questions or concerns about our Payment Policy, please do not hesitate to contact us at <DescriptionEmail onClick={handleToggleForm}>designer@string-world.com</DescriptionEmail>.
          </Description>
          <Description>
            <PreTitle></PreTitle>Date of Last Update: 25.07.2023
          </Description>

        </div>
      </Content>
      {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }
    </Section>, privacyRoot
  );
};

