import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TitleBar } from '../components/titlebar';
import { useEffect } from 'react';
import { endSession, getSessions } from '../utils/sql';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const lastDay: number | null = parseInt(localStorage.getItem('last-day') || '0');
      if (!lastDay || lastDay < Date.now()) {
        const now = new Date();
        const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const ld = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const sessions = await getSessions();
        for (let i = 0; i < sessions.length; i++) {
          const session = sessions[i];
          try {
            await endSession(session, ld.getTime());
            console.log('Ended session');
          } catch (e) {
            console.log('Couldn\'t end session');
            console.log(e);
          }
        }

        await localStorage.setItem('last-day', nextDay.getTime().toString());
      }
    })();
  }, []);

  return (
    <>
      <div className='h-screen w-screen flex flex-col overflow-hidden'>
        <TitleBar />
        <div className='grow flex h-full overflow-hidden'>
          <div className='grow h-full'>
            <Outlet />
          </div>
          {
            location.pathname != '/currentRecords' ?
            <div className="grow hidden lg:block overflow-hidden" style={{
              backgroundImage: 'url(/home.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></div> : <></>
          }
        </div>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}