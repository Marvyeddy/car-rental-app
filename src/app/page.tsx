import Base from '@/components/Base';
import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import PlanTrip from '@/components/PlanTrip';
import RentalFleet from '@/components/Rental Fleets/RentalFleet';
import SearchRent from '@/components/SearchRent/SearchRent';
import Why from '@/components/Why';

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchRent />
      <PlanTrip />
      <RentalFleet />
      <Why />
      <Faq />
      <Base />
    </main>
  );
}
