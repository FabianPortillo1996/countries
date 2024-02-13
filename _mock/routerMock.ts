jest.mock('next/router', () => jest.requireActual('next-router-mock'));
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next-router-mock'),
  useSearchParams: () => {
    const router = jest.requireActual('next-router-mock').useRouter();
    const path = router.asPath.split('?')?.[1] ?? '';
    return new URLSearchParams(path);
  },
  usePathname: jest.fn(),
}));
