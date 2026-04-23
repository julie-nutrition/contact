import type { ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "default" | "primary" | "accent";

type Props = {
  href: string;
  label: string;
  hint?: string;
  icon: ReactNode;
  variant?: Variant;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const variants: Record<Variant, string> = {
  default:
    "bg-cream-50 text-forest-700 ring-1 ring-forest-700/10 hover:bg-white hover:ring-forest-700/20",
  primary:
    "bg-forest-700 text-cream-50 ring-1 ring-forest-800 hover:bg-forest-800",
  accent:
    "bg-forest-200 text-forest-700 ring-1 ring-forest-300 hover:bg-forest-300/70",
};

const iconBg: Record<Variant, string> = {
  default: "bg-forest-700/5 text-forest-700",
  primary: "bg-cream-50/15 text-cream-50",
  accent: "bg-forest-700/10 text-forest-700",
};

export function LinkCard({
  href,
  label,
  hint,
  icon,
  variant = "default",
  external,
  ...rest
}: Props) {
  const targetProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...targetProps}
      {...rest}
      className={[
        "group relative flex items-center gap-4 rounded-2xl px-4 py-3.5 transition",
        "active:translate-y-[1px] active:shadow-none",
        "shadow-[0_1px_0_rgba(11,74,42,0.06),0_8px_20px_-14px_rgba(11,74,42,0.35)]",
        variants[variant],
      ].join(" ")}
    >
      <span
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          iconBg[variant],
        ].join(" ")}
        aria-hidden
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-[0.98rem] font-semibold leading-tight">
          {label}
        </span>
        {hint ? (
          <span
            className={[
              "truncate text-xs font-medium",
              variant === "primary" ? "text-cream-50/70" : "text-forest-700/60",
            ].join(" ")}
          >
            {hint}
          </span>
        ) : null}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}
