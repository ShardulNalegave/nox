import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TitleBar } from '../components/titlebar';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <div className='h-screen w-screen flex flex-col'>
        <TitleBar />
        <div className='grow flex h-screen'>
          <div className='grow h-screen'>
            <Outlet />
          </div>
          <div className="grow hidden lg:block" style={{
            backgroundImage: 'url(https://pict.edu/images/slider/home1/College%20Photo%2023%20Feb%202023.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}