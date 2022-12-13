'use client';
import { Heading } from '@chakra-ui/react';
import { styled } from 'app/theme/styled';
import { Theme } from 'app/theme/types';
import Image from 'next/image';
import imageSample from 'public/white-car.jpeg';

interface PostProps {
  params: { slug: string };
  searchParams: {};
}

export default function Post({ params }: PostProps) {
  return (
    <>
      <Heading as="h1">Post #{params.slug}</Heading>

      <ImageContainer>
        <Image src={imageSample} alt="White Car" />
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled('div', {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    marginTop: theme.space[6],
    borderRadius: theme.sizes[12],
    overflow: 'hidden',
    maxWidth: 474,
    maxHeight: 513,
  }),
});
