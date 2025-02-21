"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ErrorSvg } from "@/components/ui/icons";
import { HomeIcon, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  const handleReload = () => {
    window.location.reload();
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <ErrorSvg />
        <h1 className="text-2xl font-bold">Oops! Some error has occurred</h1>
        <pre className="bg-muted p-4 rounded-lg text-sm max-w-lg">{error.message}</pre>
        <div className="flex gap-2">
          <Link href="/" className={buttonVariants()} prefetch={false}>
            <HomeIcon className="size-4" />
            Back to home
          </Link>
          <Button onClick={handleReload} variant={"outline"} icon={RefreshCcw} iconPlacement="left">
            Reload
          </Button>
        </div>
      </div>
    </main>
  );
}
