"use client";
import BlurFade from "./blur-fade";

export default function BlurFadeText({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof BlurFade>) {
  return (
    <BlurFade {...props}>
      <span>{children}</span>
    </BlurFade>
  );
} 