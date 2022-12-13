'use client';
import { styled } from 'app/theme/styled';
import { Theme } from 'app/theme/types';
import { itemFactory } from 'app/utils/itemFactory';
import { Navigation } from './Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const menuList = [
  itemFactory('Home Page', '/'),
  itemFactory('Dashboard', '/dashboard'),
  itemFactory('Posts', '/posts'),
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <nav>
        <Navigation items={menuList} />
      </nav>
      <article>{children}</article>
      <Footer>&copy;2022</Footer>
    </Container>
  );
};

const Container = styled('main', {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    display: 'grid',
    gridTemplateRows: '40px 1fr 20px',
    gap: theme.space[4],
    padding: theme.space[4],
    minHeight: '100vh',
    maxWidth: 1440,
    backgroundColor: theme.colors.lime[100],
  }),
});

const Footer = styled('footer', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
