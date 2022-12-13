"use client";
import { Heading, styled, Text } from '@chakra-ui/react';
import { Theme } from 'app/theme/types';

interface JumbotronProps {
  title: string;
  text: string;
}

export const Jumbotron = ({ title, text }: JumbotronProps) => {
  return (
    <Container>
      <Heading as="h1">{title}</Heading>
      <Text>{text}</Text>
    </Container>
  );
};
const Container = styled('div', {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    display: 'grid',
    gap: theme.space[4],
    backgroundColor: theme.colors.lime[200],
    borderRadius: theme.sizes[8],
    color: theme.colors.lime[800],
    padding: theme.space[6],
    boxShadow: theme.shadows.md,
  }),
});
