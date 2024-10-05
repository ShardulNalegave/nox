import { message } from '@tauri-apps/plugin-dialog';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, Edit, FileSpreadsheet } from 'lucide-react';
import PapaParse from 'papaparse';
import { getRecords, loadStudentRecords } from '../utils/sql';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { prepareExcelReport } from '../utils/report';

export const Route = createFileRoute('/settings')({
  component: Settings,
});

function Settings() {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const updateData = (e: any) => {
    e.preventDefault();
    if (e.target['students_data'].files[0]) PapaParse.parse(e.target['students_data'].files[0], {
      worker: true,
      async complete(results, _) {
        if (!results.data || results.data.length === 0) return;
        await loadStudentRecords(results.data as [string, string, string][]);
        await message('Updated student records', {
          title: 'Nox',
          kind: 'info',
        });
      },
    });

    if (e.target['faculty_data'].files[0]) PapaParse.parse(e.target['faculty_data'].files[0], {
      worker: true,
      async complete(results, _) {
        if (!results.data || results.data.length === 0) return;
        await loadStudentRecords(results.data as [string, string, string][]);
        await message('Updated faculty records', {
          title: 'Nox',
          kind: 'info',
        });
      },
    });
  }

  const getReport = async () => {
    const records = await getRecords(fromDate.getTime(), toDate.getTime());
    console.log(records);
    await prepareExcelReport(records);
    await message('File saved with name "nox-report.xlsx"', {
      title: 'Nox',
      kind: 'info',
    });
  };

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
      <div className='h-[25px]'></div>
      <hr />
      <div className='h-[25px]'></div>
      <div>
        <h1>From Date</h1>
        <div className='h-[8px]'></div>
        <DatePicker selected={fromDate} onChange={date => setFromDate(date || new Date())} className='text-zinc-950 px-[25px] py-[15px] rounded-md w-full' />
      </div>
      <div className='h-[15px]'></div>
      <div>
        <h1>To Date</h1>
        <div className='h-[8px]'></div>
        <DatePicker selected={toDate} onChange={date => setToDate(date || new Date())} className='text-zinc-950 px-[25px] py-[15px] rounded-md w-full' />
      </div>
      <div className='h-[20px]'></div>
      <button type='button' className='py-[15px] px-[40px] bg-blue-600 text-zinc-950 rounded-md font-bold text-md' onClick={getReport}>
        <FileSpreadsheet className='inline-block' />
        <div className='w-[8px] inline-block'></div>
        Get Report
      </button>
    </div>
  );
}
