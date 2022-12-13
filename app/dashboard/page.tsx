'use client';
import { Heading, Text } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <>
      <Heading as="h2">Dashboard</Heading>
      <Text color="blue.500">Navigate to some sub menu to see active state</Text>
    </>
  );
}
