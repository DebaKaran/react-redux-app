/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store/hooks";

function useThunk(thunk: any) {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const runThunk = useCallback(
    (arg: any) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: string) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error] as const;
}

export default useThunk;
