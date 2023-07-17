import classNames from 'classnames';
import { useNavigationContext } from '../../hooks/use-navigation';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  closeMenu?: (toggle: boolean) => void;
}
const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  activeClass,
  closeMenu,
}) => {
  const { navigateTo, currentPath } = useNavigationContext();
  const finalClass = classNames(
    className,
    `text-gray-300 hover:bg-[#4D2776] hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
      currentPath === to ? activeClass : ''
    }`
  );

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (closeMenu) {
      closeMenu(false);
    }
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigateTo(to);
  };
  return (
    <a onClick={handleClick} className={finalClass} href={to}>
      {children}
    </a>
  );
};

export default Link;
