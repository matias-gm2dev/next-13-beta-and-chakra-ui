import isValidHTMLProp from '@emotion/is-prop-valid';
import { As, chakra, ChakraStyledOptions, shouldForwardProp } from '@chakra-ui/react';

/**
 * Create a custom component using HTMLElement or JSX.Element.
 * @param {HTMLElement | JSX.Element} as - The element to apply or override css styles.
 * @param {ChakraStyledOptions} options - Options for styling, add label or override should forward props settings
 * @param {string[]} props - Array of custom props to prevent fordward
 * @return {ChakraComponent<As<any>, {}>} Chakra Component.
 */
export const styled = (component: As<any>, options?: ChakraStyledOptions, props?: string[]) =>
  chakra(component, {
    shouldForwardProp: (prop) => {
      // don't forward Chakra's props
      const isChakraProp = !shouldForwardProp(prop);
      if (isChakraProp) return false;

      // forward valid HTML props
      const isValidProp = isValidHTMLProp(prop);
      if (isValidProp) return true;

      // don't forward custom prop
      return !props?.includes(prop);
    },
    ...options,
  });
