import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpDown, EditIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { UserRecord } from '@/state/userRecord';
import { DataTable } from '@/components/data-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const columns: ColumnDef<UserRecord>[] = [
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

const data: UserRecord[] = [
  {
    id: '1',
    name: 'ABC XYZ',
    email: 'abc@xyz.com'
  },
  {
    id: '2',
    name: 'PQRS',
  }
];

export const Route = createFileRoute('/admin/people/$categoryID')({
  component: PeopleCategory,
});

function PeopleCategory() {
  const {} = Route.useParams();

  return (
    <div className='p-[30px]'>
      <div className='h-[20px]'></div>
      <div className="flex">
        <div className="grow">
          <h1 className="font-display text-4xl">Students</h1>
          <div className="h-[5px]"></div>
          <h1 className="font-mono font-bold text-muted-foreground">
            People Category
          </h1>
        </div>
        <Button variant="outline">
          <EditIcon />
        </Button>
        <div className='w-[10px]'></div>
        <Button variant='destructive'>
          <Trash2Icon />
        </Button>
      </div>
      <div className='h-[20px]'></div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>
            <PlusIcon />
            New Record
          </Button>
        </DialogTrigger>
        <DialogContent className='select-none'>
          <DialogHeader>
            <DialogTitle>New Record</DialogTitle>
            <DialogDescription>Add new records to this category.</DialogDescription>
          </DialogHeader>
          <Tabs defaultValue='single'>
            <TabsList>
              <TabsTrigger value='single'>Single Entry</TabsTrigger>
              <TabsTrigger value='bulk'>Bulk Entry</TabsTrigger>
            </TabsList>

            <TabsContent value='single'>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    ID
                  </Label>
                  <Input id="id" defaultValue="1" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" defaultValue="john@doe.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="phone" defaultValue="1234567890" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Create
                </Button>
              </DialogFooter>
            </TabsContent>

            <TabsContent value='bulk'>
              <div className='h-[15px]'></div>
              <Input id="bulk_file" type="file" />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <DataTable columns={columns} data={data} filterBy='email' />
    </div>
  );
}
