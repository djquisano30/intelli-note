"use client";
import { useState } from "react";
import AIChat from "./AIChat";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

export default function AIChatButton() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setChatOpen(true);
        }}
      >
        <Bot className="mr-2" />
        Chat
      </Button>
      <AIChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
