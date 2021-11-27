import { StyledPaymentContainer } from '../styles/PaymentContainer.styles';
import { ContainedButton } from './ContainedButton';
import { TextWithLine } from './TextWithLine';
import { Formulary } from './Formulary';
import { AiFillApple } from 'react-icons/ai';

export const PaymentContainer = () => (
  <StyledPaymentContainer>
    <div>
      <ContainedButton icon={ <AiFillApple /> } text="Pay" method={ () => console.log('apple payment activated') } />
      <TextWithLine />
      <Formulary />
    </div>
  </StyledPaymentContainer>
);
