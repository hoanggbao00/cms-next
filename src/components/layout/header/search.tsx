import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/stores/use-search";
import { SearchIcon } from "lucide-react";
import { useEffect } from "react";

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export function Search({ className = "", placeholder = "Search" }: Props) {
  const { setOpen } = useSearchStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-8 w-full flex-1 justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-muted/50 md:w-40 md:flex-none lg:w-56 xl:w-64",
        className,
      )}
      onClick={() => setOpen(true)}
      icon={SearchIcon}
      iconPlacement="left"
    >
      <span className="ml-3">{placeholder}</span>
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
