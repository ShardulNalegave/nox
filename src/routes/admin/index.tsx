import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className='p-[30px]'>
      <div className='h-[30px]'></div>
      <h1 className='font-bold font-display text-3xl'>Hey There!</h1>
    </div>
  );
}
