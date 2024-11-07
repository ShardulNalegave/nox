import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/settings')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /admin/settings!'
}
