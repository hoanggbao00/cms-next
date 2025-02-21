"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { NotFoundSvg } from "@/components/ui/icons";
import { ArrowLeft, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

function NotFoundPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <NotFoundSvg />
        <h1 className="text-2xl font-bold">Oops! Page not found</h1>
        <div className="flex gap-2">
          <Link href="/" className={buttonVariants()} prefetch={false}>
            <HomeIcon className="size-4" />
            Back to home
          </Link>
          <Button icon={ArrowLeft} iconPlacement="left" onClick={handleBack} variant={"outline"}>
            Back
          </Button>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
