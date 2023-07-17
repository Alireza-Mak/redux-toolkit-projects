import Button from '../Button/Button';
import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  data: { tabName: string; tabContent: React.ReactNode }[];
  className?: string;
  active: string;
};

const Tabs = ({ data, className, active }: Props) => {
  const [showContent, setShowContent] = useState<number>(0);
  const finalClass = classNames(
    className,
    'px-0 mr-3 capitalize border-b-2 border-t-0 border-white border-x-0 hover:border-gray-500'
  );
  const renderTabName = data.map((item, index) => {
    const activeClass = index === showContent && active;
    return (
      <li key={index}>
        <Button
          onClick={() => setShowContent(index)}
          className={`${finalClass} ${activeClass}`}
        >
          {item.tabName}
        </Button>
      </li>
    );
  });
  const renderContent = data.map(
    (item, index) =>
      showContent === index && (
        <div key={index}>
          <div>{item.tabContent}</div>
        </div>
      )
  );
  return (
    <div>
      <ul className='flex flex-wrap'>{renderTabName}</ul>
      {<div>{renderContent}</div>}
    </div >
  );
};

export default Tabs;
