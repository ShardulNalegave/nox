import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, Edit } from 'lucide-react';
import PapaParse from 'papaparse';
import { loadStudentRecords } from '../utils/sql';

export const Route = createFileRoute('/settings')({
  component: Settings,
});

function Settings() {
  const navigate = useNavigate();

  const updateData = (e: any) => {
    e.preventDefault();
    PapaParse.parse(e.target['students_data'].files[0], {
      worker: true,
      async complete(results, _) {
        await loadStudentRecords(results.data as [string, string, string][]);
        alert('Updated students records');
      },
    });
  }

  return (
    <div className='p-[30px] bg-zinc-800 text-white h-full select-none overflow-auto'>
      <div className='h-[50px]'></div>
      <div className='flex items-center'>
        <button type='button' className='rounded-full bg-zinc-900 text-white showdow-lg p-[8px]' onClick={() => navigate({ to: '/' })}>
          <ArrowLeft />
        </button>
        <div className='w-[10px]'></div>
        <h1 className='text-3xl font-mono'>Settings</h1>
      </div>
      <div className='h-[35px]'></div>
      <h1 className='font-mono text-2xl'>Records</h1>
      <div className='h-[20px]'></div>
      <form onSubmit={updateData}>
        <h1>Students Data</h1>
        <input name='students_data' placeholder='Select students data' type='file' className='px-[25px] py-[15px] rounded-md w-full' />
        <h1>Faculty Data</h1>
        <input name='faculty_data' placeholder='Select faculty data' type='file' className='px-[25px] py-[15px] rounded-md w-full' />
        <div className='h-[20px]'></div>
        <button type='submit' className='py-[15px] px-[40px] bg-blue-600 text-zinc-950 rounded-md font-bold text-md'>
          <Edit className='inline-block' />
          <div className='w-[8px] inline-block'></div>
          Update
        </button>
      </form>
    </div>
  );
}
