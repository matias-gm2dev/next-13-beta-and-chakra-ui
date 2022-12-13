'use client';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { styled } from 'app/theme/styled';

interface Item {
  label: string;
  href: string;
}
interface NavigationProps {
  items: Item[];
}

export const Navigation = ({ items }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <Container isAttached colorScheme="lime">
      {items.map((item, index) => (
        <Button key={index} as={Link} href={item.href} isActive={pathname === item.href}>
          {item.label}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled(ButtonGroup, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
