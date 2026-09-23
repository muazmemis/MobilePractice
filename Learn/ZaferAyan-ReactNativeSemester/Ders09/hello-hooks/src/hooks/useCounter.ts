import { useState } from 'react';

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

type UseCounterParams = {
  initialValue?: number;
  step?: number;
};

const useCounter = ({ initialValue = 0, step = 1 }: UseCounterParams): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;
