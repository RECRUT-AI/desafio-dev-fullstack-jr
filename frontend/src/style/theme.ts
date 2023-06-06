import { extendTheme, ThemeConfig } from '@chakra-ui/react';

interface MyThemeConfig extends ThemeConfig {
  initialColorMode: 'light';
  useSystemColorMode: boolean;
}

const config: MyThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });
