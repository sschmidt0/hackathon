import { useState } from 'react';
import { StyledPaymentContainer } from '../styles/PaymentContainer.styles';
import { ContainedButton } from './ContainedButton';
import { TextWithLine } from './TextWithLine';
import { Formulary } from './Formulary';
import { AiFillApple } from 'react-icons/ai';

export const PaymentContainer = () => {
  const [buttonText, setButtonText] = useState('Pay');
  const [icon, setIcon] = useState(<AiFillApple />);

  const handleApplePay = () => {
    setButtonText('Successfully paid');
    setIcon('');

    // setTimeout just for animation purposes, not in real life project
    setTimeout(() => {
      setButtonText('Pay');
    setIcon(<AiFillApple />);
    }, 2000);
  };

  return (
    <StyledPaymentContainer>
      <div>
        <ContainedButton icon={ icon } text={ buttonText } method={ handleApplePay } />
        <TextWithLine />
        <Formulary />
      </div>
    </StyledPaymentContainer>
  );
};
