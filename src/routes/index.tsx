import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Settings } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit');
  };
  const onEndDay = async () => {
    //
  };

  return (
    <div className='flex flex-col h-full select-none bg-zinc-800 p-[30px]'>
      <div className="grow"></div>
      <div>
        <h1 className='text-4xl text-white font-mono'>New Entry</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className='h-[20px]'></div>
          <input placeholder='Enter Roll No.' className='px-[25px] py-[15px] rounded-md w-full' />
          <div className='h-[15px]'></div>
          <div className='flex'>
            <input type='submit' className='py-[15px] px-[25px] rounded-md bg-blue-600 font-bold text-md' placeholder='Submit' />
            <div className='w-[15px]'></div>
            <button type='button' onClick={onEndDay} className='py-[15px] px-[25px] rounded-md bg-zinc-300 font-bold text-md'>End Day</button>
          </div>
          <div className='h-[25px]'></div>
          <button type='button' onClick={() => navigate({ to: '/settings' })} className='py-[15px] px-[25px] rounded-md bg-zinc-300 font-bold text-md'>
            <Settings className='inline-block' />
            <div className='w-[8px] inline-block'></div>
            Settings
          </button>
        </form>
      </div>
      <div className="grow"></div>
    </div>
  );
}