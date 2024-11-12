import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpDown, CalendarIcon, FileSpreadsheetIcon } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { ColumnDef } from '@tanstack/react-table';
import { EntryRecord } from '@/state/entryRecord';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTable } from '@/components/data-table';

const columns: ColumnDef<EntryRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'enterTime',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Enter Time
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{format(row.getValue("enterTime"), 'HH:mm:ss dd/MM/yyyy')}</div>
    ),
  },
  {
    accessorKey: 'exitTime',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Exit Time
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{format(row.getValue("exitTime"), 'HH:mm:ss dd/MM/yyyy')}</div>
    ),
  },
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown />
        </Button>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email") ? row.getValue("email") : <p className='text-muted-foreground'>-</p>}</div>,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => <div>{row.getValue("phone") ? row.getValue("phone") : <p className='text-muted-foreground'>-</p>}</div>,
  },
];

const data: EntryRecord[] = [
  {
    enterTime: new Date(2024, 10, 10, 15, 30, 0, 0),
    exitTime: new Date(2024, 10, 10, 20, 30, 0, 0),
    id: '1',
    name: 'ABC XYZ',
    email: 'abc@xyz.com'
  },
  {
    enterTime: new Date(2024, 10, 11, 15, 30, 0, 0),
    exitTime: new Date(2024, 10, 11, 20, 30, 0, 0),
    id: '2',
    name: 'PQRS',
  }
];

export const Route = createFileRoute('/admin/reports/')({
  component: Reports,
})

function Reports() {
  const [fromDate, setFromDate] = useState<Date>()
  const [toDate, setToDate] = useState<Date>()

  return (
    <div className="p-[30px]">
      <div className="h-[20px]"></div>
      <h1 className="font-display text-4xl">Reports</h1>
      <div className="h-[30px]"></div>
      <div className="flex gap-4">
        <div>
          <h1>From Date:</h1>
          <div className="h-[8px]"></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !fromDate && 'text-muted-foreground',
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={setFromDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <h1>To Date:</h1>
          <div className="h-[8px]"></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !toDate && 'text-muted-foreground',
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {toDate ? format(toDate, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={toDate}
                onSelect={setToDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className='h-[15px]'></div>
      <div className="flex gap-2">
        <Button>Generate</Button>
        <Button variant='outline'>
          <FileSpreadsheetIcon />
          Export CSV
        </Button>
      </div>
      <div className='h-[30px]'></div>
      <DataTable columns={columns} data={data} filterableCols={['id', 'name', 'email', 'phone']} />
    </div>
  )
}
