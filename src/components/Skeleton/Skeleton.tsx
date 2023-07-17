import ClassNames from 'classnames';
type SkeletonProps = {
  time: number;
  className: string;
};
const Skeleton = ({ time, className }: SkeletonProps) => {
  const finalClass = ClassNames(
    className,
    'relative overflow-hidden bg-gray-200 shadow rounded mb-3'
  );
  const object = Array(time)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={finalClass}>
        <div className="absolute inset-0 -translate-x-full animate-skeleton bg-gradient-to-r from-gray-200 via-white to-gray-200"></div>
      </div>
    ));
  return <>{object}</>;
};

export default Skeleton;
