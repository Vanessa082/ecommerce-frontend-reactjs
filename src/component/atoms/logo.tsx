import { type ComponentProps } from "react";
import { cn } from "../../utils/utils";

interface LogoProps extends ComponentProps<"img"> {
  //
}

export function Logo({ className, ...restProps }: LogoProps) {
  return (
    <img
      {...restProps}
      src="/logo.png"
      alt="app logo"
      className={cn("h-[55px]", className)}
    />
  );
}
