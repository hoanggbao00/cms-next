"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsBreakpoint } from "@/hooks/use-breakpoint";
import { useEffect } from "react";
import { AppSwitcher } from "./app-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar() {
  const isTablet = useIsBreakpoint(1024);
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    if (isTablet && open) {
      setOpen(false);
    }
  }, [isTablet]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <AppSwitcher  />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
