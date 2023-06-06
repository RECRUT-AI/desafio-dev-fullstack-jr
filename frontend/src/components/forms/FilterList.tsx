import { Select } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

interface FilterListProps {
  onFilterChange: (filterValue: string) => void;
}

export function FilterList({ onFilterChange }: FilterListProps) {
  const handleFilterChange =
    ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
      onFilterChange(target.value);
    };

  return (
    <Select
      icon={<BsFilter />}
      placeholder='Ordernar Por'
      onChange={handleFilterChange}
      focusBorderColor={'teal.200'}
    >
      <option value='asc'>Nome: de A a Z</option>
      <option value='desc'>Nome: de Z a A</option>
      <option value='idade-asc'>Idade: Do menor para o maior</option>
      <option value='idade-desc'>Idade: Do maior para o menor</option>
      <option value='race-asc'>Raça: de A a Z</option>
      <option value='race-desc'>Raça: de Z a A</option>
      <option value='tutor-asc'>Tutor: de A a Z</option>
      <option value='tutor-desc'>Tutor: de Z a A</option>
    </Select>
  );
}