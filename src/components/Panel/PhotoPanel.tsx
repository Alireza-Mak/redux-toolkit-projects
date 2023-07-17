import classNames from 'classnames';
interface PhotoPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const PhotoPanel: React.FC<PhotoPanelProps> = ({ children, className, ...rest }) => {
  const finalClass = classNames(
    className,
    'grid max-[280px]:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'
  );
  return (
    <div className={finalClass} {...rest}>
      {children}
    </div>
  );
};

export default PhotoPanel;
