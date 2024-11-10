import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { createFileRoute } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const settingsSchema = z.object({
  capacity: z.number().min(0),
});

const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
});

export const Route = createFileRoute('/admin/settings')({
  component: Settings,
});

function Settings() {
  const settingsForm = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      capacity: 200,
    },
  });

  const changePasswordForm = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {},
  });

  const onSettingsFormSubmit = (values: z.infer<typeof settingsSchema>) => {
    console.log(values);
  };

  const onChangePasswordFormSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    console.log(values);
  };

  return (
    <div className='p-[30px]'>
      <div className='h-[20px]'></div>
      <h1 className='font-display text-4xl'>Settings</h1>
      <div className='h-[35px]'></div>

      <h1 className='font-display font-bold text-xl mb-[15px]'>General Settings</h1>
      <Form {...settingsForm}>
        <form className="space-y-4" onSubmit={settingsForm.handleSubmit(onSettingsFormSubmit)}>
          <FormField
            control={settingsForm.control}
            name='capacity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacity</FormLabel>
                <FormControl>
                  <Input {...field} type='number' />
                </FormControl>
                <FormDescription>
                  The room's capacity.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type='submit'>Update</Button>
        </form>
      </Form>

      <div className='h-[35px]'></div>
      <Separator />
      <div className='h-[35px]'></div>

      <h1 className='font-display font-bold text-xl mb-[15px]'>Change Password</h1>
      <Form {...changePasswordForm}>
        <form className="space-y-4" onSubmit={changePasswordForm.handleSubmit(onChangePasswordFormSubmit)}>
          <FormField
            control={changePasswordForm.control}
            name='currentPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input {...field} type='password' />
                </FormControl>
                <FormDescription>
                  Your currently set password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={changePasswordForm.control}
            name='newPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input {...field} type='password' />
                </FormControl>
                <FormDescription>
                  Set your new password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={changePasswordForm.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} type='password' />
                </FormControl>
                <FormDescription>
                  Confirm your new password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type='submit'>Update</Button>
        </form>
      </Form>

      <div className='h-[75px]'></div>
    </div>
  );
}
