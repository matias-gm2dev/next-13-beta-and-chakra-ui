import { extendTheme } from '@chakra-ui/react';

const colors = {
  lime: {
    50: '#F1F8E9',
    100: '#F0F4C3',
    200: '#E6EE9C',
    300: '#DCE775',
    400: '#D4E157',
    500: '#CDDC39',
    600: '#C0CA33',
    700: '#AFB42B',
    800: '#558B2F',
    900: '#827717',
  }
};

export const rawObjectTheme = {
  colors,
};

export const theme = extendTheme({ ...rawObjectTheme });
