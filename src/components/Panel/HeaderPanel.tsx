import React from 'react';
import Button from '../Button/Button';

type Props = {
  children: React.ReactNode;
  btnLabel: string;
  label: string;
  error: any;
  loading: boolean;
  btnAction?: () => void;
};

const HeaderPanel = ({
  children,
  btnLabel,
  label,
  btnAction,
  loading,
  error,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold ">{label}</span>
        {error ? (
          error.stack
        ) : (
          <Button
            onClick={btnAction}
            className="hover:bg-[#4D2776] hover:text-white bg-[#79272F] text-white font-semibold h-10"
            rounded
            loading={loading}
          >
            {btnLabel}
          </Button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HeaderPanel;
