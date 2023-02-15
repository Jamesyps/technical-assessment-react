import {usePathname, useRouter, useSearchParams} from 'next/navigation';

/**
 * Helper hook to consolidate the Next.js 13 route handlers
 * and enable easy modification of the searchParams object.
 *
 * @returns {Object}
 */
export const useFilterSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return {
    searchParams,

    appendParam(key, value, triggerNavigation = true) {
      params.set(key, value);

      if (triggerNavigation) {
        router.replace(`${pathname}?${params}`);
      }
    },

    removeParam(key, triggerNavigation = true) {
      params.delete(key);

      if (triggerNavigation) {
        router.replace(`${pathname}?${params}`);
      }
    },

    getParamPath(key, value) {
      params.set(key, value);

      return `${pathname}?${params}`
    }
  }
}
