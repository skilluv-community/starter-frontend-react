import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter', () => {
  it('starts at initial and derives doubled', () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.value).toBe(3);
    expect(result.current.doubled).toBe(6);
  });

  it('increments and decrements', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.value).toBe(2);
    act(() => result.current.decrement());
    expect(result.current.value).toBe(1);
  });

  it('resets to zero', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.value).toBe(0);
  });
});
