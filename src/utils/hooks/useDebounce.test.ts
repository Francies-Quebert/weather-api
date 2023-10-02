import { renderHook,act } from '@testing-library/react-hooks';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
    it('should return debounced value', () => {
        const { result } = renderHook(() => useDebounce('test', 1000));
        expect(result.current.debouncedValue).toBe('test');
    })    

    it('should return debounced value after updating', async () => {
        const { result } = renderHook(() => useDebounce('test', 1000));
        expect(result.current.debouncedValue).toBe('test');
        act(()=>result.current.setDebouncedValue('test2')); 
        expect(result.current.debouncedValue).toBe('test2');
    });
});
