import './Button.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => {},
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
