import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
