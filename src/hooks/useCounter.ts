import { useMemo, useReducer } from 'react';

type Action = { type: 'inc' } | { type: 'dec' } | { type: 'reset' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    case 'reset':
      return 0;
  }
}

export function useCounter(initial = 0) {
  const [value, dispatch] = useReducer(reducer, initial);
  return useMemo(
    () => ({
      value,
      doubled: value * 2,
      increment: () => dispatch({ type: 'inc' }),
      decrement: () => dispatch({ type: 'dec' }),
      reset: () => dispatch({ type: 'reset' }),
    }),
    [value],
  );
}
