
export interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
  plan: "Free" | "Pro";
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
}

export interface Collection {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  content: string;
  typeId: string;
  collectionId: string | null;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  language: string | null;
  updatedAt: string;
}

export const currentUser: User = {
  id: "user-1",
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  initials: "AR",
  plan: "Pro",
};

export const itemTypes: ItemType[] = [
  { id: "type-snippet", name: "Snippet", icon: "📄" },
  { id: "type-prompt", name: "Prompt", icon: "💬" },
  { id: "type-note", name: "Note", icon: "📝" },
  { id: "type-command", name: "Command", icon: "⌘" },
  { id: "type-file", name: "File", icon: "📁" },
  { id: "type-image", name: "Image", icon: "🖼️" },
  { id: "type-url", name: "URL", icon: "🔗" },
];

export const collections: Collection[] = [
  { id: "collection-react-patterns", name: "React Patterns" },
  { id: "collection-context-files", name: "Context Files" },
  { id: "collection-python-snippets", name: "Python Snippets" },
  { id: "collection-shell-devops", name: "Shell & DevOps" },
  { id: "collection-design-refs", name: "Design Refs" },
];

export const tags: string[] = [
  "react",
  "hooks",
  "typescript",
  "python",
  "docker",
  "ai",
  "prompt",
  "css",
  "git",
  "api",
];

export const items: Item[] = [
  {
    id: "item-1",
    title: "useDebounce hook",
    description: "Debounce any fast-changing value with a configurable delay.",
    content: `import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}`,
    typeId: "type-snippet",
    collectionId: "collection-react-patterns",
    tags: ["react", "hooks", "typescript"],
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    updatedAt: "2026-07-29T13:00:00.000Z",
  },
  {
    id: "item-2",
    title: "Senior code reviewer",
    description: "System prompt for thorough, kind code review.",
    content:
      "You are a senior engineer reviewing a pull request. Point out correctness issues, security risks, and readability concerns. Be direct but kind.",
    typeId: "type-prompt",
    collectionId: null,
    tags: ["ai", "prompt"],
    isFavorite: false,
    isPinned: true,
    language: null,
    updatedAt: "2026-07-29T10:00:00.000Z",
  },
  {
    id: "item-3",
    title: "Reset local git branch to remote",
    description: "Nuke local changes and match origin exactly.",
    content: `git fetch origin
git reset --hard origin/main
git clean -fd`,
    typeId: "type-command",
    collectionId: "collection-shell-devops",
    tags: ["git"],
    isFavorite: true,
    isPinned: false,
    language: "bash",
    updatedAt: "2026-07-28T15:00:00.000Z",
  },
  {
    id: "item-4",
    title: "Batch resize images",
    description: "Resize a folder of images with ImageMagick.",
    content: `for f in *.png; do
  convert "$f" -resize 800x "resized-$f"
done`,
    typeId: "type-command",
    collectionId: "collection-shell-devops",
    tags: ["docker"],
    isFavorite: false,
    isPinned: false,
    language: "bash",
    updatedAt: "2026-07-28T15:00:00.000Z",
  },
  {
    id: "item-5",
    title: "Chunk a list in Python",
    description: "Split an iterable into fixed-size chunks.",
    content: `def chunk(items, size):
    for i in range(0, len(items), size):
        yield items[i:i + size]`,
    typeId: "type-snippet",
    collectionId: "collection-python-snippets",
    tags: ["python"],
    isFavorite: false,
    isPinned: false,
    language: "python",
    updatedAt: "2026-07-28T09:00:00.000Z",
  },
  {
    id: "item-6",
    title: "Tailwind dark mode toggle notes",
    description: "How class-based dark mode plays with system preference.",
    content:
      "Use `class` strategy over `media` when a manual toggle is needed. Persist the choice in localStorage and set it before hydration to avoid a flash of the wrong theme.",
    typeId: "type-note",
    collectionId: "collection-design-refs",
    tags: ["css"],
    isFavorite: false,
    isPinned: false,
    language: null,
    updatedAt: "2026-07-28T09:00:00.000Z",
  },
  {
    id: "item-7",
    title: "REST API design cheatsheet",
    description: "Reference doc for status codes and resource naming.",
    content: "api-design-cheatsheet.pdf",
    typeId: "type-file",
    collectionId: "collection-context-files",
    tags: ["api"],
    isFavorite: false,
    isPinned: false,
    language: null,
    updatedAt: "2026-07-27T12:00:00.000Z",
  },
  {
    id: "item-8",
    title: "Dashboard layout inspiration",
    description: "Screenshot of a Linear-style collapsible sidebar.",
    content: "dashboard-layout-inspiration.png",
    typeId: "type-image",
    collectionId: "collection-design-refs",
    tags: [],
    isFavorite: false,
    isPinned: false,
    language: null,
    updatedAt: "2026-07-27T12:00:00.000Z",
  },
  {
    id: "item-9",
    title: "Neon Postgres docs",
    description: "Connection pooling and branching guide.",
    content: "https://neon.tech/docs",
    typeId: "type-url",
    collectionId: "collection-context-files",
    tags: ["api"],
    isFavorite: false,
    isPinned: false,
    language: null,
    updatedAt: "2026-07-27T08:00:00.000Z",
  },
];