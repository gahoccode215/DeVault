import { Database, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopBar() {
  return (
    <header className="grid grid-cols-3 items-center gap-4 border-b border-border px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
          <Database className="h-4 w-4" />
        </div>
        <span className="text-lg font-semibold">DevVault</span>
      </div>
      <div className="relative mx-auto w-full max-w-xl">
        <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search snippets, prompts, commands..."
          className="pl-9"
        />
      </div>
      <div className="flex justify-end">
        <Button>
          <Plus />
          New Item
        </Button>
      </div>
    </header>
  );
}
