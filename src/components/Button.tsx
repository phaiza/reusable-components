import './Button.css';

type ButtonProps = {
  label: string;
  onClick: (url:string) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  url: string;
  disabled?: boolean;
  isLoading?: boolean;
    icon?: React.ReactNode; // For optional icons
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  url,
   disabled = false,
  isLoading = false,
  icon,
}) => {
     const handleClick = () => {
    onClick(url); // Call onClick with the URL when the button is clicked
  };
  return (
    <button className={`button ${variant}`} type={type} onClick={handleClick}  disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}>
        {isLoading ? 'Loading...' : icon ? <span className="icon">{icon}</span> : null}
      {label}
    </button>
  );
};

export default Button;
