import { Pin, Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatRelativeTime } from "@/lib/format-relative-time";
import { highlightCode } from "@/lib/highlight-code";
import { itemTypeIcons } from "@/lib/item-type-icons";
import { itemTypes, type Item } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const typeBadgeClassName: Record<string, string> = {
  "type-snippet": "bg-emerald-500/15 text-emerald-500",
  "type-prompt": "bg-blue-500/15 text-blue-500",
  "type-note": "bg-amber-500/15 text-amber-500",
  "type-command": "bg-violet-500/15 text-violet-500",
  "type-file": "bg-orange-500/15 text-orange-500",
  "type-image": "bg-pink-500/15 text-pink-500",
  "type-url": "bg-cyan-500/15 text-cyan-500",
};

export async function ItemCard({ item }: { item: Item }) {
  const type = itemTypes.find((t) => t.id === item.typeId);
  const Icon = itemTypeIcons[item.typeId];
  const highlighted = item.language
    ? await highlightCode(item.content, item.language)
    : null;

  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
              typeBadgeClassName[item.typeId]
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-sm font-semibold">{item.title}</h3>
              {item.isPinned && (
                <Pin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              )}
            </div>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
        {item.isFavorite && (
          <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
        )}
      </div>

      {highlighted ? (
        <Dialog>
          <DialogTrigger
            nativeButton={false}
            render={
              <div
                role="button"
                tabIndex={0}
                className="mt-3 block w-full cursor-pointer overflow-hidden rounded-md text-left transition hover:ring-1 hover:ring-ring"
              />
            }
          >
            <div
              className="line-clamp-3 text-xs [&_pre]:!m-0 [&_pre]:whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
            </DialogHeader>
            <div
              className="max-h-[70vh] overflow-auto text-xs [&_pre]:!m-0 [&_pre]:whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </DialogContent>
        </Dialog>
      ) : (
        <p className="mt-3 line-clamp-3 text-xs text-muted-foreground">
          {item.content}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {type?.name} · {formatRelativeTime(item.updatedAt)}
        </span>
      </div>
    </div>
  );
}
