import { FolderOpen, Star } from "lucide-react";

import { formatRelativeTime } from "@/lib/format-relative-time";
import { items, type Collection } from "@/lib/mock-data";

export function CollectionCard({ collection }: { collection: Collection }) {
  const itemCount = items.filter(
    (item) => item.collectionId === collection.id
  ).length;

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
          <FolderOpen className="h-4 w-4" aria-hidden />
        </span>
        {collection.isFavorite && (
          <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
        )}
      </div>
      <h3 className="truncate text-sm font-semibold">{collection.name}</h3>
      <p className="text-xs text-muted-foreground">
        {itemCount} {itemCount === 1 ? "item" : "items"} ·{" "}
        {formatRelativeTime(collection.updatedAt)}
      </p>
    </div>
  );
}
