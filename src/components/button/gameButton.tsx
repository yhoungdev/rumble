import { cn } from "../../lib/utils";

interface SkewedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SkewedButton(
  { children, className, ...props }: SkewedButtonProps = { children: "FIGHT" },
) {
  return (
    <button
      className={cn(
        "relative group font-mono text-white text-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#F4A236] before:to-[#F4A236]/90 before:skew-x-[24deg] before:rounded-sm",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#F4A236]/90 after:to-[#F4A236] after:skew-x-[24deg] after:rounded-sm after:translate-x-[2px] after:translate-y-[2px] after:-z-10",
        "hover:before:brightness-110 hover:after:brightness-110 transition-all",
        className,
      )}
      {...props}
    >
      <span className="relative px-8 py-3 flex items-center gap-2">
        {children}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-y-[1px]"
        >
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
