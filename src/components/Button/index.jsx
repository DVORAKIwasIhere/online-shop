import './styles.scss';
export const Button = ({ children, onClickAddItem }) => {
  return (
    <button onClick={() => onClickAddItem()} className="price_button">
      {children}
    </button>
  );
};
