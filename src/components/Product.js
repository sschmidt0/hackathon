import { BackLink } from './BackLink';
import { StyledProductContainer } from '../styles/Product.styles';
import macbook from '../assets/img/macbook.png';

export const Product = () => (
  <StyledProductContainer>
    <BackLink text="Back to the Market" />
    <div className="image-container">
      <img src={ macbook } alt="New macbook" />
    </div>
    <h1>New mac</h1>
    <h2>$ 899.00</h2>
  </StyledProductContainer>
);
