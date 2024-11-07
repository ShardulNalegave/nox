import WindowControls from '@/components/windowControls';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add('light');

  return (
    <div className='select-none h-screen max-h-screen overflow-y-hidden'>
      <WindowControls />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}