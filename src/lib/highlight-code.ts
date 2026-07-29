import { codeToHtml } from "shiki";

export function highlightCode(code: string, lang: string) {
  return codeToHtml(code, { lang, theme: "dark-plus" });
}
