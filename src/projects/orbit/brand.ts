import type { Brand } from "../../shared/types";
export const brand: Brand = {
  slug: "orbit",
  name: "orbit",
  category: "Project workspace",
  tagline: "Good work finds its rhythm.",
  purpose:
    "A collaborative project workspace that gives small creative teams a clear view of their priorities, progress, and shared responsibilities.",
  description:
    "Orbit brings a small creative team’s work into one considered studio dashboard. A broad week roadmap gives research, design, content, and review their own saturated stage colors, while a continuous allocation strip connects planned hours to the actual project. Compact task rows keep owners, deadlines, checklists, and progress close together. Team workload and a timed review agenda give the work a human rhythm without overwhelming the main view. A task drawer with violet controls opens the next useful decision: change a status, complete a step, or keep a working note. Quiet paper, precise typography, and clear contrast make the shared plan easy to read on a desktop or a phone.",
  colors: [
    { name: "Studio ink", hex: "#242629" },
    { name: "Quiet paper", hex: "#F4F4F0" },
    { name: "Design violet", hex: "#6D4AF1" },
    { name: "Research green", hex: "#158F73" },
    { name: "Content amber", hex: "#E99B36" },
    { name: "Review coral", hex: "#D97769" },
  ],
  fonts: {
    heading: "Manrope",
    body: "DM Sans",
  },
  logo: '<ellipse cx="20" cy="20" rx="16" ry="8" transform="rotate(-35 20 20)" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="20" cy="20" r="5" fill="currentColor"/><circle cx="32" cy="11" r="4" fill="currentColor"/>',
  logoMeaning:
    "An orbital path and central point represent individual contributions moving around one shared purpose.",
  tags: [
    "Dashboard",
    "Project management",
    "Productivity",
    "SaaS",
    "Web app",
    "UI design",
    "Workspace",
    "Violet",
    "Collaboration",
    "Brand identity",
  ],
  artDirection:
    "A modern studio cockpit with a quiet navigation rail, dominant saturated week roadmap, one continuous project-allocation strip, compact working ledger, human workload rows, and a paper task drawer with violet controls. Manrope headings and precise DM Sans labels sit on warm gray and white.",
};
