import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import PageFooter from './PageFooter';
import ScrollToTop from './ScrollToTop';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-ink-950">
      <ScrollToTop />
      <TopNav />
      <main className="pt-16">
        <Outlet />
      </main>
      <PageFooter />
      <BottomNav />
    </div>
  );
}
