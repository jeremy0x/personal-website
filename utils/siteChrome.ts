/**
 * Shared layout tokens so bottom socials and easter hints stay visually paired.
 *
 * Social column height (approx., Tailwind defaults @ 16px root):
 * - decorative line: h-12 (48px) + mb-2 (8px) = 56px
 * - gap-5 × 3 between 4 stacked items = 60px
 * - 3 × icons @ text-xl ≈ 20px each = 60px
 * → total ≈ 176px = 11rem
 *
 * The short tick above each column uses the same line segment (DECORATIVE_LINE_CLASS).
 */
export const DECORATIVE_LINE_CLASS =
  "mb-2 h-12 w-px bg-neutral-400/60 dark:bg-neutral-600/60";

export const SITE_CHROME_STACK_GAP = "gap-5";
