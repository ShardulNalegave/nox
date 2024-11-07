import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import { LayoutDashboardIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [ID, setID] = useState('');
  const [last5Entries, setLast5Entries] = useState([
    'C2K231206',
    'sdghgh',
    'sruerhe',
    'sufdhgr',
    'sjdbdugt'
  ]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') setID(prev => prev.slice(0, -1));
      else if (/^[a-zA-Z0-9]$/.test(e.key)) setID(prev => prev + e.key);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className='relative h-full w-full overflow-hidden bg-zinc-100 flex flex-col justify-center items-center'>
      <Button className='absolute top-5 right-5' asChild>
        <Link to='/admin'>
          <LayoutDashboardIcon />
        </Link>
      </Button>

      {
        ID != '' ?
          <h1 className='text-6xl font-mono font-bold underline decoration-dashed underline-offset-8'>{ID}</h1>
          : <h1 className='text-6xl font-mono font-bold text-muted-foreground'>Enter ID</h1>
      }

      <div className='h-[30px]'></div>

      <div className='text-center'>
        {last5Entries.map(entry => (
          <h1 key={entry} className='font-mono font-bold text-opacity-80 text-zinc-950'>{entry}</h1>
        ))}
      </div>
    </div>
  )
}