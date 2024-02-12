import SwitchTheme from '@/components/atoms/switch-theme';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-24 w-full flex-row items-center justify-between bg-white px-4 shadow-[0px_2px_4px_0px_#00000024] dark:bg-dark-22 md:h-16 md:px-16">
      <h1 className="font-bold md:text-xl">Where in the World ?</h1>
      <SwitchTheme />
    </header>
  );
};

export default Header;
