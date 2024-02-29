import { useCallback } from 'react'
import { useSelector } from 'react-redux'

/**
 * 获取指定 action 的 Loading 状态，提升性能的方法
 * @param action Action Name
 */
export function useLoading(action: string) {
  const selector = useCallback(
    ({ loading }: any) => loading.effects[action],
    [action]
  );

  return useSelector(selector);
}
