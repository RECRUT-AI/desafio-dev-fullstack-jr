import {
  Flex,
  Box,
  Heading,
  Spacer,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink as ReachLink } from 'react-router-dom';
import ToggleColorMode from '../buttons/ToggleColorMode';

export function MainHeader() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      py="2"
      px="3"
      bg={useColorModeValue('blue.50', 'gray.900')}
      overflow="hidden"
    >
      <Box>
        <Heading>
          <Link 
            as={ReachLink} 
            to="/home" 
            style={{ textDecoration: 'none' }}
            textColor="teal.200"
          >
            RecrutaPet
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Options"
          bg="whiteAlpha.100"
        />
        <MenuList>
          <Link as={ReachLink} to="/home">
            <MenuItem>
              Home
            </MenuItem>
          </Link>
          <Link as={ReachLink} to="/login">
            <MenuItem>
              Login
            </MenuItem>
          </Link>
          <MenuItem>Contato</MenuItem>
        </MenuList>
      </Menu>
      <ToggleColorMode />
    </Flex>
  );
}