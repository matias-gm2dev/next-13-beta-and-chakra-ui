import { Theme as BaseTheme } from '@chakra-ui/react';
import { rawObjectTheme } from '.';

export type Theme = typeof rawObjectTheme & BaseTheme;
