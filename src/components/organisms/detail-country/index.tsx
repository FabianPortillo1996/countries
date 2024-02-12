import TagButton from '@/components/atoms/button/tag/tag-button.atom';
import DescriptionCard from '@/components/atoms/description-card';
import Flag from '@/components/atoms/flag';
import { FlagType } from '@/enums/components/atoms/flag.enum';

const DetailCountry = () => {
  return (
    <div>
      <Flag
        type={FlagType.detail}
        url="https://flagcdn.com/co.svg"
        name="Colombia"
      />
      <h2 className="mt-10 text-xl font-bold tracking-wide">Belgium</h2>
      <ul className="mb-8 mt-6 tracking-wide">
        <DescriptionCard label="Native Name:" description="Belgie" smLight />
        <DescriptionCard label="Population:" description="Belgie" smLight />
        <DescriptionCard label="Region:" description="Belgie" smLight />
        <DescriptionCard label="Sub Region:" description="Belgie" smLight />
        <DescriptionCard label="Capital:" description="Belgie" smLight />
      </ul>
      <ul className="mb-8 mt-6 text-sm font-light tracking-wide">
        <DescriptionCard
          label="Top Level Domain:"
          description="Belgie"
          smLight
        />
        <DescriptionCard label="Currencies:" description="Belgie" smLight />
        <DescriptionCard label="Languages:" description="Belgie" smLight />
      </ul>
      <div>
        <h3 className="text-base font-semibold">Border Countries:</h3>
        <div className="flex flex-row gap-2.5 overflow-y-auto pb-12 pt-4">
          <TagButton />
          <TagButton />
          <TagButton />
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
