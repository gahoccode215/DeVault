"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Star,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { itemTypeIcons } from "@/lib/item-type-icons";
import { collections, currentUser, items, itemTypes } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

function typeSlug(name: string) {
  return `${name.toLowerCase()}s`;
}

function collectionItemCount(collectionId: string) {
  return items.filter((item) => item.collectionId === collectionId).length;
}

function SidebarContent({
  collapsed,
  onToggleCollapse,
  onNavigate,
}: {
  collapsed: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const favoriteCollections = collections.filter((c) => c.isFavorite);
  const recentCollections = [...collections]
    .sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 4);

  return (
    <div className="flex h-full w-full flex-col">
      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        <ul className="space-y-1">
          {itemTypes.map((type) => {
            const href = `/items/${typeSlug(type.name)}`;
            const active = pathname === href;
            const Icon = itemTypeIcons[type.id];
            return (
              <li key={type.id}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  title={collapsed ? type.name : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                    active && "bg-muted text-foreground",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  {!collapsed && <span>{type.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {!collapsed && (
          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Favorite Collections
            </h3>
            <ul className="space-y-1">
              {favoriteCollections.length === 0 && (
                <li className="px-2 text-sm text-muted-foreground">
                  No favorites yet
                </li>
              )}
              {favoriteCollections.map((collection) => (
                <li
                  key={collection.id}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                >
                  <Star className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1 truncate">{collection.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {collectionItemCount(collection.id)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!collapsed && (
          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Recent Collections
            </h3>
            <ul className="space-y-1">
              {recentCollections.map((collection) => (
                <li
                  key={collection.id}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                >
                  <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1 truncate">{collection.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {collectionItemCount(collection.id)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="border-t border-border p-4">
        <div
          className={cn(
            "flex items-center gap-2",
            collapsed && "justify-center"
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
            {currentUser.initials}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {currentUser.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {currentUser.plan} plan
              </p>
            </div>
          )}
          {!collapsed && (
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings />
            </Button>
          )}
        </div>

        {onToggleCollapse && (
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "mt-2 w-full justify-start gap-2",
              collapsed && "justify-center px-0"
            )}
            onClick={onToggleCollapse}
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
            {!collapsed && "Collapse"}
          </Button>
        )}
      </div>
    </div>
  );
}

export function Sidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      <aside
        className={cn(
          "hidden shrink-0 border-r border-border transition-[width] duration-200 md:flex",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <SidebarContent
          collapsed={collapsed}
          onToggleCollapse={onToggleCollapse}
        />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/50"
            onClick={onCloseMobile}
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[80vw] flex-col border-r border-border bg-background">
            <div className="flex items-center justify-between border-b border-border p-4">
              <span className="text-sm font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close sidebar"
                onClick={onCloseMobile}
              >
                <X />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <SidebarContent collapsed={false} onNavigate={onCloseMobile} />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
