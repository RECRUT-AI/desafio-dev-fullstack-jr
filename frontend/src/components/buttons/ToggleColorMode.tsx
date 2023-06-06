import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} bg="whiteAlpha.100" maxW="40px">
      {colorMode === 'dark' 
        ? <SunIcon color="orange.400" /> : <MoonIcon color="gray" />}
    </Button>
  );
}

export default ToggleColorMode;