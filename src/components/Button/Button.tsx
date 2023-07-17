import ClassNames from 'classnames';
import { GoSync } from 'react-icons/go';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning);
  Number(!!danger);
  if (count > 1) {
    throw new Error();
  }
  const finalClass = ClassNames(
    className,
    {
      'bg-blue-500 border-blue-500 text-white hover:bg-white hover:text-blue-500':
        primary,
      'bg-gray-600 border-gray-600 text-white hover:bg-white hover:text-gray-600':
        secondary,
      'bg-green-500 border-green-500 text-white hover:bg-white hover:text-green-500':
        success,
      'bg-yellow-400 border-yellow-400 text-white hover:bg-white hover:text-yellow-500':
        warning,
      'bg-red-500 border-red-500 text-white hover:bg-white hover:text-red-500':
        danger,
      'rounded-md': rounded,
      '!bg-white': outline,
      '!text-blue-500 hover:!bg-blue-500 hover:!text-white': outline && primary,
      '!text-gray-600 hover:!bg-gray-600 hover:!text-white':
        outline && secondary,
      '!text-green-500 hover:!bg-green-500 hover:!text-white':
        outline && success,
      '!text-yellow-400 hover:!bg-yellow-400 hover:!text-white':
        outline && warning,
      '!text-red-500 hover:!bg-red-500 hover:!text-white': outline && danger,
    },
    'items-center px-3 pb-1.5 pt-1 border'
  );
  return (
    <button className={finalClass} {...rest}>
      {loading ? (
        <GoSync className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
