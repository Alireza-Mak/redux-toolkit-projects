import { useState, useCallback } from 'react';
import { useAppDispatch } from '../hooks/use-state';
export const useThunk = (
  thunk: Function
): {
  isLoading: boolean;
  error: any;
  runThunk: (arg?: any) => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const dispatch = useAppDispatch();
  const runThunk = useCallback(
    (arg?: any) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error: any) => setError(error))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );
  return { isLoading, error, runThunk };
};
