import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/settings')({
  component: Settings,
});

function Settings() {
  const navigate = useNavigate();

  return (
    <div className='p-[30px] bg-zinc-800 text-white h-full select-none'>
      <div className='h-[50px]'></div>
      <div className='flex items-center'>
        <button type='button' className='rounded-full bg-zinc-900 text-white showdow-lg p-[8px]' onClick={() => navigate({ to: '/' })}>
          <ArrowLeft />
        </button>
        <div className='w-[10px]'></div>
        <h1 className='text-3xl font-mono'>Settings</h1>
      </div>
      <div className='h-[25px]'></div>
      <input placeholder='Enter Roll No.' className='px-[25px] py-[15px] rounded-md w-full' />
      <input placeholder='Enter Roll No.' className='px-[25px] py-[15px] rounded-md w-full' />
    </div>
  );
}
