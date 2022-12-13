import { Navigation } from 'app/components/Navigation';
import { itemFactory } from 'app/utils/itemFactory';

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuList = [itemFactory('Settings', '/dashboard/settings'), itemFactory('Analytics', '/dashboard/analytics')];
  return (
    <>
      <Navigation items={menuList} />
      {children}
    </>
  );
}
