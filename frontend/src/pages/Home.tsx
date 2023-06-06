import { MainHeader } from '../components/headers/MainHeader';
import { PetsTable } from '../components/tables/PetsTable';

export function Home() {
  return (
    <div>
      <MainHeader />
      <PetsTable />
    </div>
  );
}