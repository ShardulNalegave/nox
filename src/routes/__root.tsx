import WindowControls from '@/components/windowControls';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add('light');

  return (
    <div className='select-none'>
      <WindowControls />
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}