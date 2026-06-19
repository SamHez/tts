import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader transparent={transparentHeader} />
      <main className={transparentHeader ? "flex-1 -mt-20" : "flex-1"}>{children}</main>
      <SiteFooter />
    </div>
  );
}
