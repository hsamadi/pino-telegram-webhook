/**
 * Borrowed from https://github.com/telegraf/entity/blob/master/escapers.ts
 */
export function escapeHTML(value) {
  const escapables = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
  };

  const toEscape = /<|>|&/g;

  return value.replace(toEscape, (r) => escapables[r] || r);
}
