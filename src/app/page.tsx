import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold tracking-tight lg:text-5xl">
          IntelliNotes
        </span>
      </div>
      <p className="max-w-prose text-center">
        Manage your notes Intelligently, and have assistance with Artificial
        Intelligence!
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
