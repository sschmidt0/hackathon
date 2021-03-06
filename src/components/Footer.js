import { StyledFooter } from '../styles/Footer.styled';
import redsys from '../assets/img/redsys.png';

export const Footer = () => (
  <StyledFooter>
    <div className="footer-first-row">
      <span>Powered by</span>
      <div className="icon-img-container">
        <img src={ redsys } alt="Redsys icon" />
      </div>
    </div>
    <div className="footer-second-row">
      <a href="https://www.apple.com" onClick={ (e) => e.preventDefault() }>Terms</a>
      <a href="https://www.apple.com" onClick={ (e) => e.preventDefault() }>Privacy</a>
    </div>
  </StyledFooter>
);
