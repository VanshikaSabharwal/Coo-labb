var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
// button variant
var buttonVariants = cva("active:scale-95 inline-flex items-center justify-center rounded-md test-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
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
});
var Button = function (_a) {
    var className = _a.className, children = _a.children, variant = _a.variant, isLoading = _a.isLoading, size = _a.size, props = __rest(_a, ["className", "children", "variant", "isLoading", "size"]);
    return (<button className={cn(buttonVariants({ variant: variant, size: size, className: className }))} disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className="mr-2 h-4 animate-spin"/> : null}
      {children}
    </button>);
};
export default Button;
