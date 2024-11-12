import { Button } from '@/components/ui/button';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';

export const Route = createFileRoute('/*')({
  component: NotFound,
});

function NotFound() {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h1 className='mb-[5px] font-bold text-2xl font-mono text-zinc-950'>404</h1>
      <h1 className='mb-[20px] text-5xl font-mono decoration-zinc-950 text-zinc-950 underline underline-offset-8 decoration-dashed'>Not Found</h1>
      <h1 className='mb-[15px]'>The page you requested for doesn't seem to exist!</h1>
      <Button variant='ghost' onClick={() => router.history.back()}>
        <ChevronLeft />
        Go Back
      </Button>
    </div>
  );
}
