import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { APP_NAME } from "@/config/app.config";
import { cn } from "@/lib/utils";
import { type AppName, useCurrentAppStore } from "@/stores/use-app";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import { useEffect } from "react";
import { toast } from "sonner";
import { dataListApp } from "./data";

export function AppSwitcher() {
  const { currentApp, setCurrentApp } = useCurrentAppStore();
  const { isMobile, setOpenMobile } = useSidebar();
  const router = useRouter();

  useEffect(() => {
    const firstPath = window.location.pathname.split("/")[1];
    const app = dataListApp.find((app) => app.link.includes(firstPath));
    if (!app) return;

    setCurrentApp(app.name);
    toast.info(`Welcome to ${app.name}`);
  }, []);

  const handleChangeApp = (name: AppName) => {
    if (isMobile) setOpenMobile(false);
    const newApp = setCurrentApp(name);
    if (newApp) {
      toast.info(`Welcome to ${newApp.name}`);
      router.push(newApp.link);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-background hover:bg-sidebar-accent text-sidebar-primary-foreground">
                <img src={currentApp.icon as string} alt={currentApp.name} className="size-6 object-cover" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{currentApp.name}</span>
                <span className="truncate text-xs">{APP_NAME}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Apps</DropdownMenuLabel>
            {dataListApp.map((app) => (
              <DropdownMenuItem
                key={app.name}
                onClick={() => {
                  handleChangeApp(app.name);
                }}
                className={cn("gap-2 p-2", {
                  "bg-sidebar-accent": app.link === currentApp.link,
                })}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <img src={app.icon} alt={app.name} className="size-full object-cover" />
                </div>
                {app.name}
                {app.link === currentApp.link && <Check className="size-4 ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
