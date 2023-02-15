'use client';

import Link from 'next/link';

import {useFilterSearchParams} from '@/client/hooks';

const Pager = () => {
  const {searchParams, getParamPath} = useFilterSearchParams();

  const page = parseInt(searchParams.get('page') || 1);
  const isFirst = page <= 1;
  const isLast = page >= 10;

  return (
    <nav className="border-t border-gray-100 pt-5">
      <ul className="grid grid-cols-2">
      {!isFirst && (
        <li className="col-span-1 col-start-1 text-center">
          <Link href={getParamPath('page', page - 1)} className="hover:text-yellow-600 hover:underline underline-offset-4">
            &laquo; Previous
          </Link>
        </li>
      )}
      {!isLast && (
        <li className="col-span-1 col-start-2 text-center">
          <Link href={getParamPath('page', page + 1)} className="hover:text-yellow-600 hover:underline underline-offset-4">
            Next &raquo;
          </Link>
        </li>
      )}
      </ul>
    </nav>
  );
};

export default Pager;
