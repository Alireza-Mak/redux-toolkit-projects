import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
export type AccordionItemsType = { id: number; title: string; content: string };
export type AccordionType = AccordionItemsType[];

type AccordionProps = {
  data: AccordionType;
  children: React.ReactNode;
  titleclass?: string;
  contentClass?: string;
};

const Accodrion: React.FC<AccordionProps> = ({
  data,
  titleclass,
  contentClass,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as HTMLElement)
      ) {
        setExpandedIndex(-1);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  });
  const handleItemClick = (index: number) => {
    setExpandedIndex((currentData) => {
      if (currentData === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const renderData = data.map((item: AccordionItemsType, index: number) => {
    const isExpanded = expandedIndex === index;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </span>
    );
    const titleClasses = classNames(
      'flex justify-between p-3 bg-gray-50 items-center',
      titleclass,
      isExpanded ? 'border-t border-x rounded-t' : 'mb-4 border rounded'
    );
    const contentClasses = classNames(
      'flex justify-between p-3 items-center',
      contentClass,
      isExpanded ? 'border  rounded-b' : 'mb-4 border rounded'
    );
    return (
      <div ref={accordionRef} key={item.id}>
        <div className={titleClasses}>
          {item.title}
          <span
            className="cursor-pointer"
            onClick={() => handleItemClick(index)}
          >
            {icon}
          </span>
        </div>
        {isExpanded && <div className={contentClasses}>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderData}</div>;
};

export default Accodrion;
