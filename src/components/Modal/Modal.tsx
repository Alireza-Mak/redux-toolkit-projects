import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect,ReactNode } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  title: string;
  content: string;
  hideModal: () => void;

  actionBar: ReactNode;
};

const Modal = ({ title, content, hideModal ,actionBar}: Props) => {
  document
    .querySelector('body')!
    .insertAdjacentHTML('beforeend', "<div id='car-modal'></div>");

  useEffect(() => {
    document.querySelector('body')!.classList.add('overflow-hidden');

    return () => {
      document.querySelector('body')!.removeChild(modal_container);
      document.querySelector('body')!.classList.remove('overflow-hidden');
    };
  });
  const modal_container = document.querySelector(
    '#car-modal'
  ) as HTMLDivElement;
  const modal_content = (
    <>
      <div onClick={()=>hideModal()} className="fixed inset-0 bg-gray-300 opacity-80 z-30"></div>
      <div className="fixed flex flex-col w-5/6 sm:w-3/4 md:w-1/2  left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 z-40 bg-white xs:p-10 rounded">
        <div className="flex justify-between items-center border-b-2 border-gray-100 p-4 text-gray-600">
          <div className="text-xl font-bold">{title}</div>
          <AiOutlineCloseCircle
            onClick={() => hideModal()}
            className="text-2xl cursor-pointer hover:"
          />
        </div>
        <p className="p-4 max-h-[8rem] sm:max-h-full overflow-scroll sm:overflow-auto text-left">
          {content}
        </p>
        <div className="p-4 flex justify-end">
        {actionBar}
        </div>
      </div>
    </>
  );
  return ReactDOM.createPortal(modal_content, modal_container);
};

export default Modal;
