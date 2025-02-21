import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { DataSidebar } from "@/types/app-sidebar";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CollapsibleSidebarItem({ sidebarItem }: { sidebarItem: DataSidebar }) {
  const pathname = usePathname();
  const isActive = pathname.includes(sidebarItem.path);
  const { isMobile, setOpenMobile, state } = useSidebar();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return state !== "collapsed" ? (
    <Collapsible key={sidebarItem.name} asChild defaultOpen={isActive} className="group/collapsible w-full">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={sidebarItem.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {sidebarItem.pathIcon}
            </svg>
            <span>{sidebarItem.name}</span>
            <ChevronDown className="ml-auto size-4 group/collapsible-data-[state=open]:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {sidebarItem.subMenu?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.name}>
                <SidebarMenuSubButton asChild className={cn(pathname === subItem.path && "bg-primary/10")}>
                  <Link href={subItem.path} onClick={handleClick} prefetch={false}>
                    <span>{subItem.name}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  ) : (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton tooltip={sidebarItem.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {sidebarItem.pathIcon}
            </svg>
            <span>{sidebarItem.name}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={10}>
          <DropdownMenuLabel>{sidebarItem.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sidebarItem.subMenu?.map((sub) => (
            <DropdownMenuItem key={`${sub.name}-${sub.path}`} asChild>
              <Link href={sub.path} className={pathname === sub.path ? "bg-secondary" : ""}>
                <span className="max-w-52 text-wrap">{sub.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

export default CollapsibleSidebarItem;
