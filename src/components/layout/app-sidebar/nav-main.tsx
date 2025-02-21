import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useCurrentAppStore } from "@/stores/use-app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsibleSidebarItem from "./nav-collapsible";

export function NavMain() {
  const pathname = usePathname();
  const { currentApp } = useCurrentAppStore();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {currentApp.dataSidebar?.map((item) =>
          item.subMenu ? (
            <CollapsibleSidebarItem key={item.name} sidebarItem={item} />
          ) : (
            <SidebarMenuItem key={item.name} className="w-full">
              <SidebarMenuButton tooltip={item.name} asChild className={cn(pathname === item.path && "bg-primary/10")}>
                <Link href={item.path} onClick={handleClick} prefetch={false}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {item.pathIcon}
                  </svg>
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
