"use client";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {
  const { theme } = useTheme();
  const [showAddEditNoteDialogDialog, setShowAddEditNoteDialog] =
    useState(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="max-w-7-xl flex flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <span className="font-bold">IntelliNotes</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ModeToggle />
            <Button
              onClick={() => {
                setShowAddEditNoteDialog(true);
              }}
            >
              <Plus />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>

      <AddEditNoteDialog
        open={showAddEditNoteDialogDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
