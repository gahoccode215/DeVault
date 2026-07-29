import { FolderOpen, Heart, Package, Star } from "lucide-react";

import { collections, items } from "@/lib/mock-data";

export function StatsOverview() {
  const stats = [
    {
      label: "Items",
      value: items.length,
      icon: Package,
    },
    {
      label: "Collections",
      value: collections.length,
      icon: FolderOpen,
    },
    {
      label: "Favorite Items",
      value: items.filter((item) => item.isFavorite).length,
      icon: Star,
    },
    {
      label: "Favorite Collections",
      value: collections.filter((collection) => collection.isFavorite).length,
      icon: Heart,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-lg font-semibold">{value}</p>
            <p className="truncate text-xs text-muted-foreground">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
