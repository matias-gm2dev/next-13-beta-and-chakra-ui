'use client';
import { useRouter } from 'next/navigation';
import { Button, ButtonGroup, Heading, Text } from '@chakra-ui/react';

export default function Posts() {
  const router = useRouter();

  const navigate = (to: string) => router.push(to);

  return (
    <>
      <Heading as="h1">Welcome to Post List</Heading>
      <Text>Navigate to some post:</Text>
      <ButtonGroup colorScheme="lime">
        <Button onClick={() => navigate('/posts/1')}>Post 1</Button>
        <Button onClick={() => navigate('/posts/2')}>Post 2</Button>
        <Button onClick={() => navigate('/posts/3')}>Post 3</Button>
        <Button onClick={() => navigate('/posts/4')}>Post 4</Button>
        <Button onClick={() => navigate('/posts/5')}>Post 5</Button>
      </ButtonGroup>
    </>
  );
}
