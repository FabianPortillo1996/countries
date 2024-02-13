'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-semibold">404</h1>
      <p className="mb-4 text-lg">Oops! Looks like you are lost.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto size-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
      <p className="mt-4">
        Let is get you back{' '}
        <Link href="/" className="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
}
