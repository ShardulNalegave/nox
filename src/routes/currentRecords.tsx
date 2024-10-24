import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react';
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { getUserRecords, UserRecord } from '../utils/sql';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/currentRecords')({
  component: CurrentRecords,
});

const headerRow: Row = {
  rowId: 'header',
  cells: [
    { type: 'header', text: 'ID' },
    { type: 'header', text: 'Name' },
    { type: 'header', text: 'Kind' },
  ],
};

const getColumns = (): Column[] => [
  { columnId: "id", width: 350 },
  { columnId: "name", width: 350 },
  { columnId: "kind", width: 350 },
];


const getRows = (recs: UserRecord[]): Row[] => [
  headerRow,
  ...recs.map<Row>((rec, idx) => ({
    rowId: idx,
    cells: [
      { type: 'text', text: rec.id },
      { type: 'text', text: rec.name },
      { type: 'text', text: rec.kind },
    ],
  })),
]

function CurrentRecords() {
  const navigate = useNavigate();
  const [userRecs, setUserRecs] = useState<Row[]>([]);

  useEffect(() => {
    (async () => {
      const recs = await getUserRecords();
      setUserRecs(getRows(recs));
    })();
  }, []);

  return (
    <div className='p-[30px] bg-zinc-800 text-white h-full select-none overflow-hidden'>
      <div className='h-[25px]'></div>
      <div className='flex items-center'>
        <button type='button' className='rounded-full bg-zinc-900 text-white showdow-lg p-[8px]' onClick={() => navigate({ to: '/settings' })}>
          <ArrowLeft />
        </button>
        <div className='w-[10px]'></div>
        <h1 className='text-3xl font-mono'>Current Records</h1>
      </div>
      <div className='h-[25px]'></div>
      <div className='h-full w-full bg-stone-50 overflow-scroll'>
        <ReactGrid rows={userRecs} columns={getColumns()} />
      </div>
    </div>
  );
}
