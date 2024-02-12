import BackButton from '@/components/atoms/button/back';
import DetailCountry from '@/components/organisms/detail-country';

const CountryDetailPage = () => {
  return (
    <main className="px-7 pt-9">
      <BackButton />
      <div className='mt-16'>
        <DetailCountry />
      </div>
    </main>
  );
};

export default CountryDetailPage;
