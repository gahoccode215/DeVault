import {
  FileCode2,
  FileText,
  Folder,
  Image as ImageIcon,
  Link as LinkIcon,
  MessageSquare,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const itemTypeIcons: Record<string, LucideIcon> = {
  "type-snippet": FileCode2,
  "type-prompt": MessageSquare,
  "type-note": FileText,
  "type-command": Terminal,
  "type-file": Folder,
  "type-image": ImageIcon,
  "type-url": LinkIcon,
};
