import { BiArrowBack } from 'react-icons/bi';

export const BackLink = ({ text }) => (
  <a href="https://www.apple.com" onClick={ (e) => e.preventDefault() }>
    <BiArrowBack />{ text }
  </a>
);
