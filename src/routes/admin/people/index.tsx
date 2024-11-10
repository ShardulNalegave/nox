import { Button } from '@/components/ui/button'
import { DialogFooter, DialogHeader } from '@/components/ui/dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PlusIcon, Trash2Icon } from 'lucide-react'

export const Route = createFileRoute('/admin/people/')({
  component: People,
})

function People() {
  return (
    <div className="p-[30px]">
      <div className="h-[20px]"></div>
      <div className="flex">
        <div className="grow">
          <h1 className="font-display text-4xl">People</h1>
          <div className="h-[5px]"></div>
          <h1 className="font-mono font-bold text-muted-foreground">
            Categories
          </h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <PlusIcon size={50} />
              Create New Category
            </Button>
          </DialogTrigger>
          <DialogContent className="select-none">
            <DialogHeader>
              <DialogTitle>Create New Category</DialogTitle>
              <DialogDescription>
                Creates a new People category.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Human" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-[30px]"></div>
      <div className="grid gap-4 grid-cols-4">
        <div className="rounded-lg shadow-sm p-[25px] border-zinc-200 border-solid border-[1px]">
          <h1 className="text-3xl font-bold font-mono">Students</h1>
          <div className="h-[3px]"></div>
          <p className="text-base text-zinc-800">Category for students</p>
          <div className="h-[20px]"></div>
          <div className="flex">
            <Button className="grow" asChild>
              <Link to='/admin/people/$categoryID' params={{ categoryID: 'students' }}>View</Link>
            </Button>
            <div className="w-[8px]"></div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2Icon />
                </Button>
              </DialogTrigger>
              <DialogContent className="select-none">
                <DialogHeader>
                  <DialogTitle>Delete Category</DialogTitle>
                  <DialogDescription>
                    Deleting would mean loss of all people data of this
                    category.
                  </DialogDescription>
                </DialogHeader>
                <Button
                  className="mt-[10px]"
                  variant="destructive"
                  type="submit"
                >
                  Confirm
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
