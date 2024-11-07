import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ChevronLeftIcon, ContactIcon, LayoutDashboardIcon, SettingsIcon } from 'lucide-react';

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add('light');

  return (
    <SidebarProvider className='h-full w-screen'>
      <Sidebar collapsible='none'>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to='/admin'>
                      <LayoutDashboardIcon/>
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to='/admin/people'>
                      <ContactIcon/>
                      People
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to='/admin/settings'>
                      <SettingsIcon/>
                      Settings
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to='/'>
                    <ChevronLeftIcon />
                    Back to Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <ScrollArea className='w-full'>
        <Outlet />
      </ScrollArea>
    </SidebarProvider>
  );
}