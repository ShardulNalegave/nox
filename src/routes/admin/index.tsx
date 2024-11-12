import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className='p-[30px]'>
      <div className='h-[30px]'></div>
      <h1 className='mb-[12px] text-4xl'>Hey There!</h1>
      <h1 className='font-mono text-lg'>Go to any of the pages listed below to configure how Nox works and generate reports.</h1>
      <div className='h-[30px]'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Link to='/admin/people' className='col-span-1 bg-stone-50 text-zinc-950 rounded-md p-[15px] border-solid border-transparent hover:border-zinc-300 border-[1px] hover:shadow-sm duration-150 cursor-pointer'>
          <h1>People</h1>
        </Link>
        <Link to='/admin/reports' className='col-span-1 bg-stone-50 text-zinc-950 rounded-md p-[15px] border-solid border-transparent hover:border-zinc-300 border-[1px] hover:shadow-sm duration-150 cursor-pointer'>
          Reports
        </Link>
        <Link to='/admin/settings' className='col-span-1 bg-stone-50 text-zinc-950 rounded-md p-[15px] border-solid border-transparent hover:border-zinc-300 border-[1px] hover:shadow-sm duration-150 cursor-pointer'>
          Settings
        </Link>
      </div>
    </div>
  );
}
