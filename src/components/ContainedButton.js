export const ContainedButton = ({ text, icon, method, isDisabled }) => (
  <button onClick={ method } disabled={ isDisabled }>
    { icon }{ text }
  </button>
);
