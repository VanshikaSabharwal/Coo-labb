import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

// button variant

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md test-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-white hover:bg-slate-400",
        ghost: "bg-transparent hover:text-slate-700 hover:bg-slate-300",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-2",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
