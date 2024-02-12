import Flag from '@/components/atoms/flag';
import { FlagType } from '@/enums/components/atoms/flag.enum';

const CardCountry = () => {
  return (
    <div>
      <Flag
        type={FlagType.detail}
        url="https://flagcdn.com/co.svg"
        name="Colombia"
      />
      <h2 className="mt-10 text-xl font-bold tracking-wide">Belgium</h2>
      <ul className="mb-8 mt-6">
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Native Name:</span>Belgie
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Population:</span>11,319,511
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Region:</span>Europe
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Sub Region:</span>Western Europe
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Capital:</span>Brussels
        </li>
      </ul>
      <ul className="mb-8">
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Top Level Domain:</span>.be
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Currencies:</span>Dutch, French,
          German
        </li>
        <li className="mb-2 text-sm font-light tracking-wide">
          <span className="mr-1 font-semibold">Languages:</span>Europe
        </li>
      </ul>
      <div>
        <h3 className="text-lg font-semibold">Border Countries:</h3>
        <div className="flex flex-row" />
      </div>
    </div>
  );
};

export default CardCountry;
