import {
  Box,
  Input,
  InputGroup,
  InputLeftElement } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icons';
import { ReactElement } from 'react';

interface SearchInputProps {
  icon: ReactElement<IconProps>;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({
  icon,
  placeholder,
  type,
  value,
  onChange,
}:SearchInputProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="70%"
      margin="0 auto"
      pt="1rem"
    >
      <InputGroup
        size="md"
      >
          <InputLeftElement pointerEvents='none'>
            {icon}
          </InputLeftElement>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  );
}