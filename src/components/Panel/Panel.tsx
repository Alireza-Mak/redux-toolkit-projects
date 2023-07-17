import classNames from 'classnames';
interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const finalClass = classNames(
    className,
    'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'
  );
  return (
    <div className={finalClass} {...rest }>
      {children}
    </div>
  );
};

export default Panel;
