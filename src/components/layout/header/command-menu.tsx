import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCurrentAppStore } from "@/stores/use-app";
import { useSearchStore } from "@/stores/use-search";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "nextjs-toploader/app";
import React from "react";
import { toast } from "sonner";
import { dataListApp } from "../app-sidebar/data";

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { open, setOpen } = useSearchStore();
  const { setCurrentApp } = useCurrentAppStore();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          {dataListApp.map((group) => (
            <CommandGroup key={group.name} heading={group.name}>
              {group.dataSidebar.map((navItem, i) => {
                if (navItem.path)
                  return (
                    <CommandItem
                      key={`${navItem.path}-${i}`}
                      value={navItem.name === "Home" ? `${group.name.toLocaleLowerCase()} home` : navItem.name}
                      onSelect={() => {
                        runCommand(() => {
                          const newApp = setCurrentApp(group.name);
                          if (newApp) {
                            toast.info(`Welcome to ${newApp.name}`);
                          }
                          router.push(navItem.path);
                        });
                      }}
                      className="capitalize"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {navItem?.pathIcon}
                      </svg>
                      {navItem.name}
                    </CommandItem>
                  );

                return navItem.subMenu?.map((subItem, i) => (
                  <CommandItem
                    key={`${subItem.path}-${i}`}
                    value={subItem.name}
                    onSelect={() => {
                      runCommand(() => {
                        const newApp = setCurrentApp(group.name);
                        if (newApp) {
                          toast.info(`Welcome to ${newApp.name}`);
                        }
                        router.push(subItem.path);
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {navItem?.pathIcon}
                    </svg>
                    {subItem.name}
                  </CommandItem>
                ));
              })}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="scale-90" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}
